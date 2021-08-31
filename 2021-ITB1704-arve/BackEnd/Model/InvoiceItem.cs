using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace BackendProject.Model {
    public class InvoiceItem {
        public Guid Id { get; set; }
        public string ItemDescription { get; set; }
        public double Amount { get; set; }
        public double PricePerAmount { get; set; }
    }
}
