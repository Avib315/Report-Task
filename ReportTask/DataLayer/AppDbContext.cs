using Microsoft.EntityFrameworkCore;
using ReportTask.Models;
using ReportTask.Models;

namespace ReportTask.Data
{
    public class AppDbContext : DbContext
    {
        public AppDbContext(DbContextOptions<AppDbContext> options) : base(options) { }

        public DbSet<ReportHour> ReportHours { get; set; }  // This will represent the ReportHour table in the database
    }
}
