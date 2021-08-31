using System;
using System.Collections.Generic;
using Microsoft.VisualBasic;

namespace BackendProject.Model {
    public class Invoice {
        public Guid Id { get; set; }
        public int InvoiceNumber { get; set; }
        public int PurchaseOrderNumber { get; set; }
        public string DateOfSupply { get; set; }
        public string DateOfInvoice { get; set; }
        public string UserRegCode { get; set; }
        public string UserName { get; set; }
        public string UserPhoneNumber { get; set; }
        public string UserAddress { get; set; }
        public string UserPostalCode { get; set; }
        public string UserCity { get; set; }
        public string UserCountry { get; set; }
        public string UserBankName { get; set; }
        public string UserBankAccount { get; set; }
        public string CustomerName { get; set; }
        public string CustomerAddress { get; set; }
        public string CustomerPostalCode { get; set; }
        public string CustomerCity { get; set; }
        public string CustomerCountry { get; set; }
        public List<InvoiceItem> InvoiceItems { get; set; }
        public double TotalPrice { get; set; }
        public double VatPercentage { get; set; }
        public double TotalVat { get; set; }
        public double TotalWithoutVat { get; set; }
        public double Discount { get; set; }
        public double DiscountSum { get; set; }
        public string PaymentTerms { get; set; }
        public string HowToPay { get; set; }
    }
}
