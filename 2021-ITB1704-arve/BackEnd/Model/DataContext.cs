using System;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;
using Npgsql;

namespace BackendProject.Model {
    public class DataContext : DbContext {
        public DataContext(DbContextOptions<DataContext> options) : base(options) { }

        public DbSet<User> UsersList { get; set; }
        public DbSet<Invoice> InvoicesList { get; set; }
        public DbSet<InvoiceItem> InvoiceItems { get; set; }

        static DataContext() {
            NpgsqlConnection.GlobalTypeMapper.MapEnum<Status>();
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder) {
            base.OnModelCreating(modelBuilder);
            modelBuilder.HasPostgresEnum<Status>();
            modelBuilder.Entity<User>().HasData(
                new User {
                    Id = Guid.Parse("21d50ef3-e9a0-4635-ba75-768190dfe558"),
                    RegCode = "10002450",
                    Address = "Õuna 10",
                    BankAccount = "EE112",
                    BankName = "LHV pank",
                    City = "Tallinn",
                    Country = "Eesti",
                    Name = "Pulgakomm AS",
                    PostalCode = "12682",
                    Status = Status.Active,
                    PhoneNumber = "10"
                },
                new User {
                    Id = Guid.NewGuid(),
                    RegCode = "800077",
                    Address = "Arbuusi 98",
                    BankAccount = "RUS8000",
                    BankName = "Bank of Venemaa",
                    City = "Haapsalu",
                    Country = "Eesti",
                    Name = "Haribo OÜ",
                    PostalCode = "00001",
                    Status = Status.NotActive,
                    PhoneNumber = "55555555"
                }
            );
            modelBuilder.Entity<Invoice>().HasData(
                new Invoice
                {
                    Id = Guid.NewGuid(),
                    InvoiceNumber = 654654,
                    UserName = "Hugo",
                    UserPhoneNumber = "10",
                    TotalPrice = 5,
                    }
            );
        }
    }
}
