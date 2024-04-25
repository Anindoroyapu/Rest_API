using System.Globalization;

namespace WebAPI_ST.Utils
{
    public class TimeOperation
    {
        public static long GetUnixTime()
        {
            return (long)(DateTime.UtcNow.Subtract(new DateTime(1970, 1, 1))).TotalSeconds;
        }

        public static long GetUnixTime(DateTime dateTime)
        {
            return (int)dateTime.Subtract(new DateTime(1970, 1, 1)).TotalSeconds;
        }

        public static long GetUnixTime(string? dateString)
        {
            if (dateString == null)
            {
                return 0;
            }

            return (int)DateTime.ParseExact(dateString, "yyyy-MM-dd", CultureInfo.InvariantCulture).Subtract(new DateTime(1970, 1, 1)).TotalSeconds;
        }

        public static int GetDay(long unixTimeStamp)
        {
            return (int)(new DateTime(1970, 1, 1).AddSeconds(unixTimeStamp)).Day;
        }
    }
}
