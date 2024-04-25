using MiracleWebAPI.Utils;

namespace WebAPI_ST.Models.Auth
{
    public class AuthValidate
    {
        public static ApiResponse ValidateLoginPost(AuthLogin authLogin)
        {
            var st = Validation.ValidateAll(new List<StatusObj>
            {
                Validation.IsValidEmailFormat(authLogin.Username, "Username/Email Address"),
                Validation.IsValidGeneralLongString(authLogin.Password, "Password", 1),
            });


            return new ApiResponse { Status = st.Status, Title = st.Title };
        }

        public static ApiResponse ValidateLogoutPost(AuthLogout authLogout)
        {
            var st = Validation.ValidateAll(new List<StatusObj>
            {
                Validation.IsValidGeneralLongString(authLogout.Token, "Token", 20),
            });

            return new ApiResponse { Status = st.Status, Title = st.Title, ReferenceName = "" };
        }

        public static ApiResponse ValidateRegistrationPost(AuthRegistration authRegistration)
        {
            var st = Validation.ValidateAll(new List<StatusObj>
            {
                Validation.IsValidGeneralString(authRegistration.FirstName, "First Name",4),
                Validation.IsValidGeneralString(authRegistration.LastName, "Last Name",1),
                Validation.IsValidPhoneNumberFormat(authRegistration.Phone, "Phone"),
                Validation.IsValidEmailFormat(authRegistration.Email, "Email Address"),
                Validation.IsValidPasswordFormat(authRegistration.Password, "Password"),
            });


            return new ApiResponse { Status = st.Status, Title = st.Title };
        }

        public static ApiResponse ValidateResetPasswordIdentity(AuthResetPasswordVerifyIdentity authResetPassword)
        {
            var st = Validation.ValidateAll(new List<StatusObj>
            {
                Validation.IsValidEmailFormat(authResetPassword.Email, "Email Address"),
            });

            //--Reference FirstName
            var refNames = new List<string> {
                "Email",
            };

            var referanceName = Validation.GetReferenceName(refNames, st.ErrorIndex);

            return new ApiResponse { Status = st.Status, Title = st.Title, ReferenceName = referanceName };
        }

        public static ApiResponse ValidateResetPasswordCode(AuthResetPasswordVerifyCode verifyCode)
        {
            var st = Validation.ValidateAll(new List<StatusObj>
            {
                Validation.IsValidEmailFormat(verifyCode.Email, "Email Address"),
                Validation.IsValidGeneralLongString(verifyCode.Secret, "Secret", 6),
                Validation.IsValidGeneralString(verifyCode.Code, "Code", 6, 6),
            });

            //--Reference FirstName
            var refNames = new List<string> {
                "Email",
                "Secret",
                "Code",
            };

            var referanceName = Validation.GetReferenceName(refNames, st.ErrorIndex);

            return new ApiResponse { Status = st.Status, Title = st.Title, ReferenceName = referanceName };
        }

        public static ApiResponse ValidateUpdatePassword(AuthResetPasswordUpdate updatePassword)
        {
            var st = Validation.ValidateAll(new List<StatusObj>
            {
                Validation.IsValidEmailFormat(updatePassword.Email, "Email Address"),
                Validation.IsValidGeneralLongString(updatePassword.Secret, "Secret"),
                Validation.IsValidGeneralString(updatePassword.Code, "Code", 6, 6),
                Validation.IsValidPasswordFormat(updatePassword.Password1, "New Password"),
                Validation.IsTrue(updatePassword.Password1 == updatePassword.Password2, "New Passwords doesn't match"),
            });

            //--Reference FirstName
            var refNames = new List<string> {
                "Email",
                "Secret",
                "Code",
                "Password1",
                "Password2",
            };

            var referanceName = Validation.GetReferenceName(refNames, st.ErrorIndex);

            return new ApiResponse { Status = st.Status, Title = st.Title, ReferenceName = referanceName };
        }
    }
}
