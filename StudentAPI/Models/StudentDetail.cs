using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace StudentAPI.Models
{
    public class StudentDetail
    {
		[Key]
		public int StudentId { get; set; }
		[Column(TypeName = "nvarchar(100)")]
		public string StudentName { get; set; }
		[Column(TypeName = "nvarchar(100)")]
		public string StudentLastName { get; set; }
		[Column(TypeName = "nvarchar(100)")]
		public string StudentCollege { get; set; }
		[Column(TypeName = "nvarchar(100)")]
		public string StudentCourse { get; set; }
		

	}
}
