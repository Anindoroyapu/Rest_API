// Ignore Spelling: Utils

namespace WebAPI_ST.Utils
{
    public class ApiResponseHandler
    {
        public static ApiResponse Success(string message)
        {
            return new ApiResponse
            {
                Status = 0,
                Title = message,
                Data = new { },
            };
        }

        public static ApiResponse Success(string message, object data)
        {
            return new ApiResponse
            {
                Status = 0,
                Title = message,
                Data = data,
            };
        }

        public static ApiResponse Success(string message, string data)
        {
            return new ApiResponse
            {
                Status = 0,
                Title = message,
                Data = data,
            };
        }

        public static ApiResponse ErrorWithData(string message, string ReferenceName, object data)
        {
            return new ApiResponse
            {
                Status = 1,
                Title = message,
                Data = data,
            };
        }

        public static ApiResponse Error(string message = "Error", string ReferenceName = "")
        {
            return new ApiResponse
            {
                Status = 1,
                Title = message,
                Data = new { },
            };
        }

        public static ApiResponse Error(ApiResponse apiResponse)
        {
            return new ApiResponse
            {
                Status = 1,
                Title = apiResponse.Title,
                Data = new { },
            };
        }

        public static ApiResponse NotFound(string message)
        {
            return new ApiResponse
            {
                Status = 2,
                Title = message,
                Data = new { },
            };
        }

        public static ApiResponse BadRequest(Exception ex)
        {
            return new ApiResponse
            {
                Status = 401,
                Title = ex.Message,
                Data = new { },
            };
        }
    }
}
