using Microsoft.EntityFrameworkCore.Migrations;

namespace StudentAPI.Migrations
{
    public partial class Initial : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "StudentDetails",
                columns: table => new
                {
                    StudentId = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    StudentName = table.Column<string>(type: "nvarchar(100)", nullable: true),
                    StudentLastName = table.Column<string>(type: "nvarchar(100)", nullable: true),
                    StudentCollege = table.Column<string>(type: "nvarchar(100)", nullable: true),
                    StudentCourse = table.Column<string>(type: "nvarchar(100)", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_StudentDetails", x => x.StudentId);
                });

            migrationBuilder.CreateTable(
                name: "StudentIndexs",
                columns: table => new
                {
                    IndexId = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    StudentSubject = table.Column<string>(type: "nvarchar(16)", nullable: true),
                    StudentDateMark = table.Column<string>(type: "nvarchar(15)", nullable: true),
                    StudentMark = table.Column<string>(type: "nvarchar(3)", nullable: true),
                    StudentId = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_StudentIndexs", x => x.IndexId);
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "StudentDetails");

            migrationBuilder.DropTable(
                name: "StudentIndexs");
        }
    }
}
