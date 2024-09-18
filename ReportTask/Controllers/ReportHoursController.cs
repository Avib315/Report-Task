using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;
using System.Threading.Tasks;
using ReportTask.Models;
using ReportTask.Data;

namespace ReportTask.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class ReportHoursController : ControllerBase
    {
        private readonly ReportHourRepository _reportHourRepository;

        public ReportHoursController(ReportHourRepository reportHourRepository)
        {
            _reportHourRepository = reportHourRepository;
        }

  
        [HttpGet("getreporthours", Name = "GetReportHoursList")]
        public async Task<ActionResult<List<ReportHour>>> Get()
        {
            var reportHours = await _reportHourRepository.GetAllReportHours();
            return Ok(reportHours);
        }

     
        [HttpPut("updatereporthour/{id}")]
        public async Task<ActionResult<List<ReportHour>>> Update(int id, [FromBody] ReportHour updatedReportHour)
        {
            var success = await _reportHourRepository.UpdateReportHour(id, updatedReportHour);
            if (!success)
            {
                return NotFound();
            }

            var reportHours = await _reportHourRepository.GetAllReportHours();
            return Ok(reportHours);
        }

        
        [HttpPost("addnewreporthour")]
        public async Task<ActionResult<List<ReportHour>>> Create([FromBody] ReportHour newReportHour)
        {
            if (newReportHour == null)
            {
                return BadRequest("Invalid report hour data");
            }

            await _reportHourRepository.AddReportHour(newReportHour);
            var reportHours = await _reportHourRepository.GetAllReportHours();
            return CreatedAtAction("Get", new { id = newReportHour.Id }, reportHours);
        }

        
        [HttpDelete("deletereporthour/{id}")]
        public async Task<ActionResult<List<ReportHour>>> Delete(int id)
        {
            var success = await _reportHourRepository.DeleteReportHour(id);
            if (!success)
            {
                return NotFound();
            }

            var reportHours = await _reportHourRepository.GetAllReportHours();
            return Ok(reportHours);
        }
    }
}
