using Microsoft.Extensions.DependencyInjection;
using MudBlazor.Services;

namespace sampleMud
{
	public class Module
	{
		public static void Main()
		{
			// this entrypoint should remain empty
		}

		public static void ConfigureServices(IServiceCollection services)
		{
			// configure dependency injection here
			//services.AddMudServices();
		}

		public static void ConfigureShared(IServiceCollection services)
		{
			services.AddMudServices();
		}
	}
}
