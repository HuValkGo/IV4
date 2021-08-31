using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BackendProject.Model {
    public class User {
        public Guid Id { get; set; }
        public string RegCode { get; set; }
        public string Name { get; set; }
        public string PhoneNumber { get; set; }
        public string Address { get; set; }
        public string PostalCode { get; set; }
        public string City { get; set; }
        public string Country { get; set; }
        public string BankName { get; set; }
        public string BankAccount { get; set; }
        public Status Status {get; set;}
    }

    public enum Status {
        Active = 0,
        NotActive = 1
    }
}
