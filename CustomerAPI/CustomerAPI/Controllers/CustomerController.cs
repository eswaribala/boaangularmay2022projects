using CustomerAPI.Models;
using CustomerAPI.Repositories;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

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
    }
}
