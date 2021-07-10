using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;
namespace StudentAPI.Models
{
    public class StudentIndex
    {
        [Key]
        public int IndexId { get; set; }

        [Column(TypeName = "nvarchar(16)")]
        public string StudentSubject { get; set; }

        [Column(TypeName = "nvarchar(15)")]
        public string StudentDateMark { get; set; }

        [Column(TypeName = "nvarchar(3)")]
        public string StudentMark { get; set; }

        [ForeignKey("StudentDetail")]
        public virtual int StudentId { get; set; }
    }
}
