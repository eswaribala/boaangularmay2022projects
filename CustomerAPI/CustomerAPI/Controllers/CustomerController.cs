using CustomerAPI.Models;
using CustomerAPI.Repositories;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System.Transactions;

namespace CustomerAPI.Controllers
{
    [ApiVersion("1")]
    [Route("api/v{version:apiVersion}/[controller]")]
    [ApiController]
    public class CustomerController : ControllerBase
    {
        private readonly ICustomerRepository _customerRepository;

        public CustomerController(ICustomerRepository customerRepository)
        {
            _customerRepository = customerRepository;
        }

        // GET: api/<SupplierController>
        [HttpGet]
        public IEnumerable<Customer> Get()
        {
            return  _customerRepository.GetAllCustomers();

        }

        // GET api/<SupplierController>/5
        [HttpGet("{CustomerId}")]
        public Customer Get(long CustomerId)
        {
            return _customerRepository.GetCustomerById(CustomerId);
        }

        // POST api/<CustomerController>
        [HttpPost]
        public IActionResult Post([FromBody] Customer customer)
        {
            

            _customerRepository.AddCustomer(customer);

            return CreatedAtAction(nameof(Get),
                 new { id = customer.CustomerId }, customer);

        }

        // PUT api/<SupplierController>/5
        [HttpPut()]
        public IActionResult Put([FromBody] Customer customer)
        {
            if (customer != null)
            {
                using (var scope = new TransactionScope())
                {
                    _customerRepository.UpdateCustomer(customer);
                    scope.Complete();
                   
                    return new OkResult();
                }
            }
            return new NoContentResult();
        }

        // DELETE api/<SupplierController>/5
        [HttpDelete("{CustomerId}")]
        public IActionResult Delete(long CustomerId)
        {
            if(_customerRepository.DeleteCustomerById(CustomerId))
               return new OkResult();
            else
                return new NoContentResult();
        }

    }
}
