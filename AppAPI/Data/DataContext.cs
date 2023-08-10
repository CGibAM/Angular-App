using AppAPI.Entities;
using Microsoft.EntityFrameworkCore;

namespace AppAPI.Data;

public class DataContext : DbContext
{
    public DataContext(DbContextOptions<DataContext> options) : base(options)
    {
        Database.EnsureCreated();
    }

    public DbSet<AppUser> Users { get; set; }
}

