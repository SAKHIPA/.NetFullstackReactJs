using HelpDesk.Data;
using HelpDesk.Models;
using Microsoft.AspNetCore.Authentication;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity.Data;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Security.Claims;

namespace HelpDesk.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class TaskController : ControllerBase
    {
        private readonly ApplicationDbContext _context;

        public TaskController(ApplicationDbContext context)
        {
            _context = context;



        }
        [HttpGet]
        public async Task<ActionResult<IEnumerable<TaskDetail>>> GetProducts()
        {
            return await _context.TaskDetails.ToListAsync();
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<TaskDetail>> GetProduct(int id)
        {
            var product = await _context.TaskDetails.FindAsync(id);

            if (product == null)
            {
                return NotFound();
            }

            return product;
        }


        //[HttpGet("GetEmployeeTasks/{userId}")]
        //public async Task<ActionResult<IEnumerable<TaskDetail>>> GetEmployeeTasks(string userId)
        //{
        //    var employee = await _context.Users.FirstOrDefaultAsync(e => e.Empcode == userId);

        //    if (employee == null)
        //    {
        //        return NotFound();
        //    }

        //    var tasks = await _context.TaskDetails
        //                              .Where(t => t.UserId == employee.Empcode)
        //                              .ToListAsync();

        //    if (tasks == null || !tasks.Any())
        //    {
        //        return NotFound();
        //    }

        //    return Ok(tasks);
        //}



        [HttpPost]
        public async Task<ActionResult<TaskDetail>> PostProduct(TaskDetail task)
        {
            _context.TaskDetails.Add(task);
            await _context.SaveChangesAsync();

            return CreatedAtAction(nameof(GetProduct), new { id = task.TaskId }, task);
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> PutProduct(int id, TaskDetail task)
        {
            if (id != task.TaskId)
            {
                return BadRequest();
            }

            _context.Entry(task).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!ProductExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteProduct(int id)
        {
            var task = await _context.TaskDetails.FindAsync(id);
            if (task == null)
            {
                return NotFound();
            }

            _context.TaskDetails.Remove(task);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool ProductExists(int id)
        {
            return _context.TaskDetails.Any(e => e.TaskId == id);
        }



        [HttpPost("login")]
        public async Task<ActionResult<User>> Login(User user)
        {
            // Find user by username
            var userlogin = await _context.Users.SingleOrDefaultAsync(u => u.Name == user.Name);

            if (userlogin == null || user.Password != userlogin.Password)
            {
                return Unauthorized("Invalid username or password.");
            }

            var role = "";

            if (userlogin.Post_Id == 9)
            {
                role = "Employee";
            }
            else if (userlogin.Post_Id == 12)
            {
                role = "Admin";
            }
            else
            {
                role = "TechLead";
            }
            return Ok(new { message = "Login successful", role });
        }

        [HttpPost("register")]
        public async Task<ActionResult<User>> Register(User users)
        {
            if (_context.Users.Any(u => u.Name == users.Name))
            {
                return BadRequest("Username already exists.");
            }
            var user = new User
            {
                Name = users.Name,
                Password = users.Password,
                Post_Id = users.Post_Id

            };
            _context.Users.Add(user);
            _context.SaveChanges();
            return Ok("Successfully registerd new employee");
        }




    }


}




