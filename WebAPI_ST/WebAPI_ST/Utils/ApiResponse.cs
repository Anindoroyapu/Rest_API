// Ignore Spelling: Utils

namespace WebAPI_ST.Utils
{
    public class ApiResponse
    {
        public int Status { get; set; }

        public string Title { get; set; } = "";

        public object Data { get; set; } = new { };

        public string ReferenceName { get; set; } = "";
    }
}
