using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using BackendProject.Model;

namespace BackendProject.Controllers
{

    [Route("api/[controller]")]
    [ApiController]
    public class InvoicesController : ControllerBase
    {
        private readonly DataContext _context;

        public InvoicesController(DataContext context)
        {
            _context = context;
        }

        /// <summary>Leiab kõik arved ja nende info</summary>
        /// <returns>Arvete nimekiri</returns>
        // GET: api/Invoices
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Invoice>>> GetInvoicesList()
        {
            var invoices = _context.InvoicesList.Include(x => x.InvoiceItems).ToListAsync();
            return await invoices;
        }

        /// <summary>Leiab ühe arve info, milles sisaldub etteantud id</summary>
        /// <param name="id">GUID</param>
        /// <returns>Arve info</returns>
        // GET: api/Invoices/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Invoice>> GetInvoice(Guid id) {
            var invoice = _context.InvoicesList.Include(x => x.InvoiceItems)
                .FirstOrDefault(x => x.Id == id);

            if (invoice == null)
            {
                return NotFound();
            }

            return invoice;
        }

        /// <summary>Muudab ühe arve infot, milles sisaldub etteantud id</summary>
        /// <param name="id">GUID</param>
        /// <returns></returns>
        // PUT: api/Invoices/5
        [HttpPut("{id}")]
        public async Task<IActionResult> PutInvoice(Guid id, Invoice invoice)
        {
            
            if (id != invoice.Id)
            {
                return BadRequest();
            }

            _context.Entry(invoice).State = EntityState.Modified;

            if (invoice.InvoiceItems.Count != 0) {
                foreach (var item in invoice.InvoiceItems)
                {
                    _context.Entry(item).State = EntityState.Modified;
                }
            }
            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!InvoiceExists(id))
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

        /// <summary>Lisab arve</summary>
        /// <returns>Lisatud arve</returns>
        // POST: api/Invoices
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<Invoice>> PostInvoice(Invoice invoice)
        {
            
            _context.InvoicesList.Add(invoice);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetInvoice", new { id = invoice.Id }, invoice);
        }

        /// <summary>Kustutab arve, milles sisaldub etteantud id</summary>
        /// <param name="id">GUID</param>
        /// <returns>No Content</returns>
        // DELETE: api/Invoices/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteInvoice(Guid id)
        {
            var invoice = _context.InvoicesList.Include(x => x.InvoiceItems)
                .FirstOrDefault(x => x.Id == id);
            if (invoice == null)
            {
                return NotFound();
            }

            _context.InvoicesList.Remove(invoice);
            if (invoice.InvoiceItems.Count != 0) {
                foreach (var item in invoice.InvoiceItems)
                {
                    _context.InvoiceItems.Remove(item);
                }
            }

            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool InvoiceExists(Guid id)
        {
            return _context.InvoicesList.Any(e => e.Id == id);
        }
    }
}
