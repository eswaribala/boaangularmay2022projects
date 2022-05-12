using CustomerAPI.Auth;
using CustomerAPI.Models;
using CustomerAPI.Repositories;
using Microsoft.AspNetCore.Authorization;

using Microsoft.AspNetCore.Mvc;
using System.Transactions;

namespace CustomerAPI.Controllers
{
    //[Authorize(Roles = UserRoles.Admin)]
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
        public async Task<IEnumerable<Customer>> Get()
        {
            return  await _customerRepository.GetAllCustomers();

        }

        // GET api/<SupplierController>/5
        [HttpGet("{CustomerId}")]
        public async Task<Customer> Get(long CustomerId)
        {
            return await _customerRepository.GetCustomerById(CustomerId);
        }

        // POST api/<CustomerController>
        [HttpPost]
        public async Task<IActionResult> Post([FromBody] Customer customer)
        {
            

            await _customerRepository.AddCustomer(customer);

            return CreatedAtAction(nameof(Get),
                 new { id = customer.CustomerId }, customer);

        }

        // PUT api/<SupplierController>/5
        [HttpPut()]
        public async Task<IActionResult> Put([FromBody] Customer customer)
        {
            if (customer != null)
            {
                using (var scope = new TransactionScope(TransactionScopeAsyncFlowOption.Enabled))
                {
                   await _customerRepository.UpdateCustomer(customer);
                    scope.Complete();
                   
                    return new OkResult();
                }
            }
            return new NoContentResult();
        }

        // DELETE api/<SupplierController>/5
        [HttpDelete("{CustomerId}")]
        public async Task<IActionResult> Delete(long CustomerId)
        {
            if(await _customerRepository.DeleteCustomerById(CustomerId))
               return new OkResult();
            else
                return new NoContentResult();
        }

    }
}
