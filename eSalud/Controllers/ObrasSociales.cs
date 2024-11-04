using eSalud.Data;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Rendering;


namespace eSalud.Controllers;

public class ObrasSocialesController : Controller
{

    private ApplicationDbContext _context;

    public ObrasSocialesController(ApplicationDbContext context)
    {
        _context = context;
    }

    public IActionResult Index()
    {
       

        return View();

    }
}
