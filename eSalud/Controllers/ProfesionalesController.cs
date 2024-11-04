using eSalud.Data;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Rendering;


namespace eSalud.Controllers;

public class ProfesionalesController : Controller
{

    private ApplicationDbContext _context;

    public ProfesionalesController(ApplicationDbContext context)
    {
        _context = context;
    }

    public IActionResult Index()
    {
       

        return View();

    }
}
