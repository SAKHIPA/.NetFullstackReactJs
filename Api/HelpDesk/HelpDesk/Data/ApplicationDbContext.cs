using HelpDesk.Models;
using Microsoft.EntityFrameworkCore;

namespace HelpDesk.Data
{
    public class ApplicationDbContext : DbContext
    {
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options) : base(options)
        {

        }
        public DbSet<TaskDetail> TaskDetails { get; set; }
        public DbSet<User> Users { get; set; }
      
    }
}
