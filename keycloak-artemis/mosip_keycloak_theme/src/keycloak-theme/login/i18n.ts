import { createUseI18n } from "keycloakify/login";

export const { useI18n } = createUseI18n({
    // NOTE: Here you can override the default i18n messages
    // or define new ones that, for example, you would have
    // defined in the Keycloak admin UI for UserProfile
    // https://user-images.githubusercontent.com/6702424/182050652-522b6fe6-8ee5-49df-aca3-dba2d33f24a5.png
    en: {
        alphanumericalCharsOnly: "Only alphanumerical characters",
        gender: "Gender",
        // Here we overwrite the default english value for the message "doForgotPassword"
        // that is "Forgot Password?" see: https://github.com/InseeFrLab/keycloakify/blob/f0ae5ea908e0aa42391af323b6d5e2fd371af851/src/lib/i18n/generated_messages/18.0.1/login/en.ts#L17
        invalidUserMessage: "Invalid username or password.",
        usernameOrEmail: "Username",
        doLogIn: "Login",
        loginDesc: "Please enter your registered email and password to login",
        regDesc: "Please fill in the below fields to register as partner.",
        namePlaceholder: "Enter username",
        passwordPlaceholder: "Enter Password",
        noAccount: "Not a member yet?",
        doRegister: "Register",
        partnerType: "Partner Type",
        selectAnOption: "Select Partner Type",
        orgName: "Organisation Name",
        address: "Address",
        email: "Email Address",
        backToLogin: "Back",
        firstNamePH: "Enter First Name",
        lastNamePH: "Enter Last Name",
        orgnamePH: "Enter Organisation Name",
        addressPH: "Enter Address",
        emailPH: "Enter Email Address",
        phoneNumberPH: "Enter Phone Number",
        userNamePH: "Enter Username",
        alreadyMember: "Already a member?",
        requiredFields: "All fields are required, except ones marked as optional",
        missingPartnerTypeMessage: "Please specify partner type",
        logInErrorMsg: "Entered Email Address or Password invalid!",
        registerErrorMsg: "Please fill all the required fields",
        passwordInfo: "Use 8 or more characters with at least one upper and lower case alphabet, atleast one special character.",
        inputErrorMsg: "Please enter",
        orgInfoMsg: "Enter the organisation name as mentioned in ORGANISATION ATTRIBUTE of CERTIFICATE SUBJECT in CA Signed Certificate",
        existingEmailErr: "Email already exists.",
        invalidEmailErr: "Invalid email address.",
        passwordConditions: "Password does not meet the minimum requirements. Please try again.",
        passwordNotMatch: "Password and Confirm password do not match. Try again.",
        invalidPhoneNo: "Please Enter valid Phone Number",
        forgotPasswordDesc: "Please enter your registered email address and we will send you instructions on your email on how to create a new password.",
        resetPassword: "Reset Password",
        rememberPW: "Remember Password?",
        nosearchData: "Data not found in the dropdown list",
        updatePasswordTitle: "Set New Password",
        updatePasswordDesc: "To set new password, please enter the new password and re-enter the new password to confirm.",
        emailverificationHeading: "Email Verification link sent!",
        emailVerifyTitle: "Email Verification link sent!",
        emailVerifyText: "You need to verify your email address to activate your account. An email with instruction to verify your email address has been sent to you.",
        notReceviedText: "Haven’t received the email in your inbox yet?",
        resentEmail: "Resend Email",
        expiredActionMessage: "Looks like you have already reset password or this action is no longer valid.",
        sryText: "We are sorry!",
        backToApplication: "Back to Application",
        proceedWithAction: "Click here to proceed",
        newPassword: "New Password",
        confNewPassword: "Confirm New Password",
        missingUsernameMessage: "Please enter valid email address.",
    },
    fr: {
        /* spell-checker: disable */
        alphanumericalCharsOnly: "Caractère alphanumérique uniquement",
        gender: "Genre",
        invalidUserMessage: "Nom d'utilisateur ou mot de passe invalide. (ce message a été écrasé dans le thème)",
        usernameOrEmail: "Nom d'utilisateur ou courriel",
        doLogIn: "Se connecter",
        loginDesc: "Veuillez entrer votre email enregistré et votre mot de passe pour vous connecter",
        regDesc: "Veuillez remplir les champs ci-dessous pour vous inscrire en tant que partenaire.",
        namePlaceholder: "Saisissez votre nom d'utilisateur",
        passwordPlaceholder: "Entrer le mot de passe",
        noAccount: "Pas encore membre?",
        doRegister: "Registre",
        partnerType: "Type de partenaire",
        selectAnOption: "Sélectionnez le type de partenaire",
        orgName: "Nom de l'organisme",
        address: "Adresse",
        email: "Adresse e-mail",
        backToLogin: "Dos",
        firstNamePH: "Entrez votre prénom",
        lastNamePH: "Entrer le nom de famille",
        orgnamePH: "Entrez le nom de l'organisation",
        addressPH: "Entrer l'adresse",
        emailPH: "Entrer l'adresse e-mail",
        phoneNumberPH: "Entrez le numéro de téléphone",
        userNamePH: "Saisissez votre nom d'utilisateur",
        alreadyMember: "Déjà membre?",
        requiredFields: "Tous les champs sont obligatoires, sauf ceux marqués comme facultatifs",
        missingPartnerTypeMessage: "Veuillez préciser le type de partenaire",
        logInErrorMsg: "Adresse e-mail ou mot de passe saisi invalide!",
        registerErrorMsg: "Veuillez remplir tous les champs obligatoires",
        passwordInfo: "Utilisez 8 caractères ou plus avec au moins un alphabet majuscule et minuscule, au moins un caractère spécial.",
        inputErrorMsg: "Entrez s'il vous plait",
        orgInfoMsg: "Entrez le nom de l'organisation tel que mentionné dans l'ATTRIBUT DE L'ORGANISATION du SUJET DU CERTIFICAT dans le certificat signé par l'autorité de certification.",
        existingEmailErr: "L'email existe déjà.",
        invalidEmailErr: "Adresse e-mail invalide.",
        passwordConditions: "Le mot de passe ne répond pas aux exigences minimales. Veuillez réessayer.",
        passwordNotMatch: "Mot de passe et Confirmer le mot de passe ne correspondent pas. Essayer à nouveau.",
        invalidPhoneNo: "S'il vous plait entrez un numéro de téléphone valide",
        forgotPasswordDesc: "Veuillez saisir votre adresse e-mail enregistrée et nous vous enverrons des instructions sur votre e-mail pour savoir comment créer un nouveau mot de passe.",
        resetPassword: "réinitialiser le mot de passe",
        rememberPW: "Se souvenir du mot de passe?",
        nosearchData: "Données introuvables dans la liste déroulante",
        updatePasswordTitle: "Definir un nouveau mot de passe",
        updatePasswordDesc: "Pour définir un nouveau mot de passe, veuillez saisir le nouveau mot de passe et ressaisir le nouveau mot de passe pour confirmer.",
        emailverificationHeading: "Lien de vérification par e-mail envoyé!",
        emailVerifyTitle: "Lien de vérification par e-mail envoyé!",
        emailVerifyText: "Vous devez vérifier votre adresse e-mail pour activer votre compte. Un e-mail contenant des instructions pour vérifier votre adresse e-mail vous a été envoyé.",
        notReceviedText: "Vous n'avez pas encore reçu l'e-mail dans votre boîte de réception?",
        resentEmail: "Ré-envoyer l'email",
        expiredActionMessage: "Il semble que vous ayez déjà réinitialisé votre mot de passe ou que cette action n'est plus valide.",
        sryText: "Nous sommes désolés!",
        backToApplication: "Retour à la candidature",
        proceedWithAction: "Cliquez ici pour continuer",
        newPassword: "nouveau mot de passe",
        confNewPassword: "Confirmer le nouveau mot de passe",
        missingUsernameMessage: "Veuillez saisir une adresse e-mail valide."
        /* spell-checker: enable */
    }
});

export type I18n = NonNullable<ReturnType<typeof useI18n>>;
