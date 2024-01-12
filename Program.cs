using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace NestjsEndpointGenerator
{
    internal class Program
    {
        static void Main(string[] args)
        {
            Console.ForegroundColor = ConsoleColor.Green;
            Console.Title = "Nestjs Endpoint Generator";
            Console.WriteLine("Endpoint Name: ");
            string seleteval = Console.ReadLine();

            string[] endpoints = seleteval.Split(',');
            foreach (var endpoint in endpoints)
            {
                string directoryName = FirstCharToLower(endpoint);

                string name = FirstCharToUpper(endpoint);

                if (Directory.Exists(directoryName))
                    Directory.Delete(directoryName, true);
                Directory.CreateDirectory(directoryName);
                Directory.CreateDirectory(directoryName + "/dto");

                // Process the list of files found in the directory.
                string[] fileEntries = Directory.GetFiles("template", "*.ts", SearchOption.AllDirectories);
                foreach (var path in fileEntries)
                {
                    FileInfo info = new FileInfo(path);
                    string context = File.ReadAllText(path);
                    context = context.Replace("[NAME]", name);
                    if (path.EndsWith(".controller.ts"))
                    {
                        context = context.Replace("[NAMEPROP]", directoryName);
                        context = context.Replace("[TAG]", name);
                    }
                    if (path.Contains("dto"))
                        File.WriteAllText($"{directoryName}/dto/{info.Name.ToLower().Replace("template", directoryName)}", context);
                    else
                        File.WriteAllText($"{directoryName}/{info.Name.ToLower().Replace("template", directoryName)}", context);
                }
            }


            Directory.CreateDirectory("Generator");
            Directory.CreateDirectory("Generator/dto");

            Console.ForegroundColor = ConsoleColor.DarkRed;
            Console.WriteLine("Press any key to continue to exit.");
            Console.ReadLine();
        }
        public static string FirstCharToUpper(string input)
        {
            if (string.IsNullOrEmpty(input))
                return "";
            return input.First().ToString().ToUpper() + string.Join("", input.Skip(1));
        }
        public static string FirstCharToLower(string input)
        {
            if (string.IsNullOrEmpty(input))
                return "";
            return input.First().ToString().ToLower() + string.Join("", input.Skip(1));
        }
    }
}
