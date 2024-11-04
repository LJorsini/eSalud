using eSalud.Data;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Rendering;


namespace eSalud.Controllers;

public class EstudiosController : Controller
{

    private ApplicationDbContext _context;

    public EstudiosController(ApplicationDbContext context)
    {
        _context = context;
    }

    public IActionResult Index()
    {
       

        return View();

    }
}
