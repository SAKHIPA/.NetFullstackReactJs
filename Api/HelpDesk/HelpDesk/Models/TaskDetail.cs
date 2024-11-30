using System.ComponentModel.DataAnnotations;

namespace HelpDesk.Models
{
    public class TaskDetail
    {
        [Key]
        public int TaskId { get; set; }
        public string TaskName { get; set; }
        public string TaskDescription { get; set; }
        public string UserId {  get; set; }
        public string TaskStatus { get; set; }
        public string? Assignee {  get; set; }
        public string Department { get; set; }

    }
}
