using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using StudentAPI.Models;

namespace StudentAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class StudentIndexController : ControllerBase
    {
        private readonly StudentContext _context;

        public StudentIndexController(StudentContext context)
        {
            _context = context;
        }

        // GET: api/StudentIndexes
        [HttpGet]
        public async Task<ActionResult<IEnumerable<StudentIndex>>> GetStudentIndexs()
        {
            return await _context.StudentIndexs.ToListAsync();
        }

        // GET: api/StudentIndexes/5
        [HttpGet("{id}")]
        public async Task<ActionResult<StudentIndex>> GetStudentIndex(int id)
        {
            var studentIndex = await _context.StudentIndexs.FindAsync(id);

            if (studentIndex == null)
            {
                return NotFound();
            }

            return studentIndex;
        }

        // PUT: api/StudentIndexes/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutStudentIndex(int id, StudentIndex studentIndex)
        {
            if (id != studentIndex.IndexId)
            {
                return BadRequest();
            }

            _context.Entry(studentIndex).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!StudentIndexExists(id))
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

        // POST: api/StudentIndexes
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<StudentIndex>> PostStudentIndex(StudentIndex studentIndex)
        {
            _context.StudentIndexs.Add(studentIndex);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetStudentIndex", new { id = studentIndex.IndexId }, studentIndex);
        }

        // DELETE: api/StudentIndexes/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteStudentIndex(int id)
        {
            var studentIndex = await _context.StudentIndexs.FindAsync(id);
            if (studentIndex == null)
            {
                return NotFound();
            }

            _context.StudentIndexs.Remove(studentIndex);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool StudentIndexExists(int id)
        {
            return _context.StudentIndexs.Any(e => e.IndexId == id);
        }
    }
}
