using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using ReportTask.Models;
using Microsoft.EntityFrameworkCore;

namespace ReportTask.Data
{
    public class ReportHourRepository
    {
        private readonly AppDbContext _context;

        public ReportHourRepository(AppDbContext context)
        {
            _context = context;
        }

        public async Task<List<ReportHour>> GetAllReportHours()
        {
            return await _context.ReportHours.ToListAsync();
        }

        public async Task<ReportHour> GetReportHourById(int id)
        {
            return await _context.ReportHours.FindAsync(id);
        }

        public async Task AddReportHour(ReportHour reportHour)
        {
            _context.ReportHours.Add(reportHour);
            await _context.SaveChangesAsync();
        }

        public async Task<bool> UpdateReportHour(int id, ReportHour updatedReportHour)
        {
            var existingReportHour = await _context.ReportHours.FindAsync(id);
            if (existingReportHour != null)
            {
                existingReportHour.TaskName = updatedReportHour.TaskName;
                existingReportHour.HoursWorked = updatedReportHour.HoursWorked;
                existingReportHour.Date = updatedReportHour.Date;
                await _context.SaveChangesAsync();
                return true;
            }
            return false;
        }

        public async Task<bool> DeleteReportHour(int id)
        {
            var existingReportHour = await _context.ReportHours.FindAsync(id);
            if (existingReportHour != null)
            {
                _context.ReportHours.Remove(existingReportHour);
                await _context.SaveChangesAsync();
                return true;
            }
            return false;
        }
    }
}
