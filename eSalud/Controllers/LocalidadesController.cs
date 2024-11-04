using eSalud.Data;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Rendering;


namespace eSalud.Controllers;

public class LocalidadesController : Controller
{

    private ApplicationDbContext _context;

    public LocalidadesController(ApplicationDbContext context)
    {
        _context = context;
    }

    public IActionResult Index()
    {
       

        return View();

    }
}
