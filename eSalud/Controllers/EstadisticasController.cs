using eSalud.Data;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Rendering;


namespace eSalud.Controllers;

public class EstadisticasController : Controller
{

    private ApplicationDbContext _context;

    public EstadisticasController(ApplicationDbContext context)
    {
        _context = context;
    }

    public IActionResult Index()
    {
       

        return View();

    }
}