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
        expiredActionMessage: "This action is no longer valid as you have already completed the process",
        sryText: "We are sorry!",
        backToApplication: "Back to Application",
        proceedWithAction: "Click here to proceed",
        newPassword: "New Password",
        confNewPassword: "Confirm New Password",
        missingUsernameMessage: "Please enter valid email address.",
        expiredActionTokenNoSessionMessage: "Link has expired, Please retry again.",
        loginTimeout: "Session has timed out because of inactivity. Please retry again",
        invalidPasswordConfirmMessage: "The passwords do not match. Try again",
        pageExpiredTitle: "Session has expired!",
        pageExpiredMsg1: "Please click on continue to resume from where you left. Else click on Restart to start a new session.",
        restartProcess: "Restart Process",
        continueSession: "Continue Session",
        userNameLable: "Username / Email address",
        firstName: "First Name",
        lastName: "Last Name",
        phoneNumber: "Phone Number",
        invalidUserName: "Username does not meet the minimum requirements.",
        userNamePolicy: "Alphanumeric characters and symbols ( _ ) are allowed. First character should be always a letter.",
        locale_hin: "हिंदी",
        locale_tam: "தமிழ்",
        locale_kan: "ಕನ್ನಡ",
        doForgotPassword: "Forgot Password?",
        password: "Password",
        doRegister: "Register",
        registerTitle: "Register",
        username: "Username",
        doSubmit: "Submit",
        emailSentMessage: "You should receive an email shortly with further instructions.",
        confirmEmailAddressVerification: "Confirm validity of e-mail address {0}.",
        emailVerifiedMessage: "Your email address has been verified.",
        accountUpdatedMessage: "Your account has been updated.",
        cookieNotFoundMessage: "Cookie not found. Please make sure cookies are enabled in your browser.",
        emailVerifiedAlreadyMessage:"Your email address has been verified already.",
        lengthErrMessage: "Length must be between",
        and: "and",
        invalidInput: "Entered Invalid characters. Only letters and spaces are allowed.",
        UpdateDetailsDesc: "Please fill in the below fields to register as partner.",
        loginProfileTitle: "Update Account Information"
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
        backToApplication: "Retour à la candidature",
        proceedWithAction: "Cliquez ici pour continuer",
        newPassword: "nouveau mot de passe",
        confNewPassword: "Confirmer le nouveau mot de passe",
        missingUsernameMessage: "Veuillez saisir une adresse e-mail valide.",
        expiredActionTokenNoSessionMessage: "Veuillez réessayer",
        sryText: "Le lien a expiré!",
        loginTimeout: "La session a expiré en raison de l'inactivité. Veuillez réessayer",
        invalidPasswordConfirmMessage: "Le mot de passe ne correspond pas. Essayer à nouveau",
        pageExpiredTitle: "La session est expirée !",
        pageExpiredMsg1: "Veuillez cliquer sur continuer pour reprendre là où vous êtes parti. Sinon, cliquez sur Redémarrer pour démarrer une nouvelle session.",
        restartProcess: "Redémarrer le processus",
        continueSession: "Continuer la session",
        userNameLable: "Nom d'utilisateur / Adresse e-mail",
        firstName: "Prénom",
        lastName: "Nom de famille",
        phoneNumber: "Numéro de téléphone",
        invalidUserName: "Le nom d'utilisateur ne répond pas aux exigences minimales.",
        userNamePolicy: "Les caractères alphanumériques et les symboles ( _ ) sont autorisés. Le premier caractère doit toujours être une lettre.",
        locale_hin: "हिंदी",
        locale_tam: "தமிழ்",
        locale_kan: "ಕನ್ನಡ",
        doForgotPassword: "Mot de passe oublié?",
        password: "Mot de passe",
        doRegister: "Registre",
        registerTitle: "Registre",
        username: "Nom d'utilisateur",
        doSubmit: "Soumettre",
        emailSentMessage: "Vous devriez recevoir un e-mail sous peu avec des instructions supplémentaires.",
        confirmEmailAddressVerification: "Confirmez la validité de l'adresse e-mail {0}.",
        emailVerifiedMessage: "Votre adresse e-mail a été vérifiée.",
        accountUpdatedMessage: "Votre compte a été mis à jour.",
        cookieNotFoundMessage: "Cookie non trouvé. Veuillez vous assurer que les cookies sont activés dans votre navigateur.",
        emailVerifiedAlreadyMessage:"Votre adresse e-mail a déjà été vérifiée.",
        lengthErrMessage: "La longueur doit être comprise entre",
        and: "et",
        invalidInput: "Caractères saisis non valides. Seules les lettres et les espaces sont autorisés.",
        UpdateDetailsDesc: "Veuillez remplir les champs ci-dessous pour vous inscrire en tant que partenaire.",
        loginProfileTitle: "Mettre à jour les informations du compte"
        /* spell-checker: enable */
    },
    ar: {
        alphanumericalCharsOnly: "الحروف الأبجدية الرقمية فقط",
        gender: "جنس",
        invalidUserMessage: "خطأ في اسم المستخدم أو كلمة مرور.",
        usernameOrEmail: "اسم المستخدم",
        doLogIn: "تسجيل الدخول",
        loginDesc: "الرجاء إدخال البريد الإلكتروني المسجل وكلمة المرور لتسجيل الدخول",
        regDesc: "يرجى ملء الحقول أدناه للتسجيل كشريك.",
        namePlaceholder: "ادخل اسم المستخدم",
        passwordPlaceholder: "أدخل كلمة المرور",
        noAccount: "لست عضوا حتى الآن؟",
        partnerType: "نوع الشريك",
        selectAnOption: "حدد نوع الشريك",
        orgName: "اسم المنظمة",
        address: "عنوان",
        email: "عنوان البريد الإلكتروني",
        backToLogin: "خلف",
        firstNamePH: "أدخل الاسم الأول",
        lastNamePH: "إدخال اسم آخر",
        orgnamePH: "أدخل اسم المنظمة",
        addressPH: "أدخل العنوان",
        emailPH: "أدخل عنوان البريد الالكتروني",
        phoneNumberPH: "أدخل رقم الهاتف",
        userNamePH: "ادخل اسم المستخدم",
        alreadyMember: "عضوا فعلا؟",
        requiredFields: "جميع الحقول مطلوبة، باستثناء تلك التي تم تحديدها كاختيارية",
        missingPartnerTypeMessage: "يرجى تحديد نوع الشريك",
        logInErrorMsg: "تم إدخال عنوان البريد الإلكتروني أو كلمة المرور غير صالحة!",
        registerErrorMsg: "يرجى ملء كافة الحقول المطلوبة",
        passwordInfo: "استخدم 8 أحرف أو أكثر مع أبجدية كبيرة وصغيرة واحدة على الأقل، وحرف خاص واحد على الأقل.",
        inputErrorMsg: "تفضل",
        orgInfoMsg: "أدخل اسم المؤسسة كما هو مذكور في سمة المنظمة لموضوع الشهادة في الشهادة الموقعة من CA",
        existingEmailErr: "البريد الالكتروني موجود بالفعل.",
        invalidEmailErr: "عنوان البريد الإلكتروني غير صالح.",
        passwordConditions: "كلمة المرور لا تلبي الحد الأدنى من المتطلبات. حاول مرة اخرى.",
        passwordNotMatch: "كلمة المرور وتأكيد كلمة المرور غير متطابقين. حاول ثانية.",
        invalidPhoneNo: "الرجاء إدخال رقم هاتف صحيح",
        forgotPasswordDesc: "يرجى إدخال عنوان بريدك الإلكتروني المسجل وسنرسل لك تعليمات على بريدك الإلكتروني حول كيفية إنشاء كلمة مرور جديدة.",
        resetPassword: "إعادة تعيين كلمة المرور",
        rememberPW: "تذكر كلمة المرور؟",
        nosearchData: "لم يتم العثور على البيانات في القائمة المنسدلة",
        updatePasswordTitle: "تعيين كلمة مرور جديدة",
        updatePasswordDesc: "لتعيين كلمة مرور جديدة، يرجى إدخال كلمة المرور الجديدة وإعادة إدخال كلمة المرور الجديدة للتأكيد.",
        emailverificationHeading: "تم إرسال رابط التحقق من البريد الإلكتروني!",
        emailVerifyTitle: "تم إرسال رابط التحقق من البريد الإلكتروني!",
        emailVerifyText: "تحتاج إلى التحقق من عنوان بريدك الإلكتروني لتفعيل حسابك. تم إرسال بريد إلكتروني يحتوي على تعليمات للتحقق من عنوان بريدك الإلكتروني إليك.",
        notReceviedText: "لم تتلق البريد الإلكتروني في صندوق الوارد الخاص بك حتى الآن؟",
        resentEmail: "إعادة إرسال البريد الإلكتروني",
        expiredActionMessage: "لم يعد هذا الإجراء صالحًا لأنك أكملت العملية بالفعل",
        sryText: "نحن اسفون!",
        backToApplication: "العودة إلى التطبيق",
        proceedWithAction: "انقر هنا للمضي قدما",
        newPassword: "كلمة المرور الجديدة",
        confNewPassword: "تأكيد كلمة المرور الجديدة",
        missingUsernameMessage: "الرجاء إدخال عنوان بريد إلكتروني صالح.",
        expiredActionTokenNoSessionMessage: "انتهت صلاحية الرابط، يرجى إعادة المحاولة مرة أخرى.",
        loginTimeout: "لقد انتهت مهلة الجلسة بسبب عدم النشاط. يرجى إعادة المحاولة مرة أخرى",
        invalidPasswordConfirmMessage: "كلمات السر لا تتطابق. حاول ثانية",
        pageExpiredTitle: "انتهت صلاحية الجلسة!",
        pageExpiredMsg1: "الرجاء الضغط على 'متابعة' للاستئناف من حيث توقفت. وإلا انقر على إعادة التشغيل لبدء جلسة جديدة.",
        restartProcess: "عملية إعادة التشغيل",
        continueSession: "متابعة الجلسة",
        userNameLable: "اسم المستخدم / عنوان البريد الإلكتروني",
        firstName: "الاسم الأول",
        lastName: "اسم العائلة",
        phoneNumber: "رقم التليفون",
        invalidUserName: "اسم المستخدم لا يلبي الحد الأدنى من المتطلبات.",
        userNamePolicy: "يُسمح باستخدام الأحرف الأبجدية الرقمية والرموز (_). يجب أن يكون الحرف الأول دائمًا حرفًا.",
        locale_hin: "हिंदी",
        locale_tam: "தமிழ்",
        locale_kan: "ಕನ್ನಡ",
        doForgotPassword: "هل نسيت كلمة السر؟",
        password: "كلمة المرور",
        doRegister: "يسجل",
        registerTitle: "يسجل",
        username: "اسم المستخدم",
        doSubmit: "يُقدِّم",
        emailSentMessage: "من المفترض أن تتلقى بريدًا إلكترونيًا قريبًا يتضمن المزيد من التعليمات.",
        confirmEmailAddressVerification: "تأكيد صحة عنوان البريد الإلكتروني {0}.",
        emailVerifiedMessage: "تم التحقق من عنوان بريدك الإلكتروني.",
        accountUpdatedMessage: "تم تحديث حسابك.",
        cookieNotFoundMessage: "لم يتم العثور على ملف تعريف الارتباط. يرجى التأكد من تمكين ملفات تعريف الارتباط في متصفحك.",
        emailVerifiedAlreadyMessage:"لقد تم التحقق من عنوان بريدك الإلكتروني بالفعل.",
        lengthErrMessage: "يجب أن يكون الطول بين",
        and: "و",
        invalidInput: "تم إدخال أحرف غير صالحة. يُسمح فقط بالأحرف والمسافات.",
        UpdateDetailsDesc: "يرجى ملء الحقول أدناه للتسجيل كشريك.",
        loginProfileTitle: "تحديث معلومات الحساب"
    },
    hin: {
        alphanumericalCharsOnly: "केवल अक्षरांकीय वर्ण",
        gender: "लिंग",
        invalidUserMessage: "अमान्य उपयोगकर्ता नाम या पासवर्ड।",
        usernameOrEmail: "उपयोगकर्ता नाम",
        doLogIn: "लॉग इन करें",
        loginDesc: "लॉगिन करने के लिए कृपया अपना पंजीकृत ईमेल और पासवर्ड दर्ज करें",
        regDesc: "भागीदार के रूप में पंजीकरण करने के लिए कृपया नीचे दिए गए फ़ील्ड भरें।",
        namePlaceholder: "उपयोगकर्ता नाम दर्ज करें",
        passwordPlaceholder: "पास वर्ड दर्ज करें",
        noAccount: "अभी तक एक सदस्य नहीं हूए ?",
        partnerType: "भागीदार प्रकार",
        selectAnOption: "सहभागी प्रकार चुनें",
        orgName: "संगठन का नाम",
        address: "पता",
        email: "ईमेल पता",
        backToLogin: "वापस",
        firstNamePH: "पहला नाम दर्ज करें",
        lastNamePH: "अंतिम नाम दर्ज करें",
        orgnamePH: "संगठन का नाम दर्ज करें",
        addressPH: "पता दर्ज करें",
        emailPH: "ईमेल पता दर्ज करें",
        phoneNumberPH: "फोन नंबर दर्ज करें",
        userNamePH: "उपयोगकर्ता नाम दर्ज करें",
        alreadyMember: "पहले से ही सदस्य हैं?",
        requiredFields: "सभी फ़ील्ड आवश्यक हैं, सिवाय उनके जिन्हें वैकल्पिक के रूप में चिह्नित किया गया है",
        missingPartnerTypeMessage: "कृपया भागीदार प्रकार निर्दिष्ट करें",
        logInErrorMsg: "दर्ज किया गया ईमेल पता या पासवर्ड अवैध है!",
        registerErrorMsg: "कृपया सभी आवश्यक फ़ील्ड भरें",
        passwordInfo: "कम से कम एक ऊपरी और निचले अक्षर, और कम से कम एक विशेष अक्षर के साथ 8 या अधिक वर्णों का उपयोग करें।",
        inputErrorMsg: "कृपया दर्ज करें",
        orgInfoMsg: "संगठन का नाम दर्ज करें जैसा कि सीए हस्ताक्षरित प्रमाणपत्र के प्रमाणपत्र विषय में संगठन विशेषता में उल्लिखित है",
        existingEmailErr: "ईमेल पहले से मौजूद है।",
        invalidEmailErr: "अवैध ईमेल पता।",
        passwordConditions: "पासवर्ड न्यूनतम आवश्यकताओं को पूरा नहीं करता है। कृपया पुनः प्रयास करें।",
        passwordNotMatch: "पासवर्ड और पुष्टिकरण पासवर्ड मेल नहीं खाते। पुनः प्रयास करें।",
        invalidPhoneNo: "कृपया वैध फोन नंबर दर्ज करें",
        forgotPasswordDesc: "कृपया अपना पंजीकृत ईमेल पता दर्ज करें और हम आपको नया पासवर्ड बनाने के निर्देश ईमेल पर भेजेंगे।",
        resetPassword: "पासवर्ड रीसेट करें",
        rememberPW: "पासवर्ड याद है?",
        nosearchData: "ड्रॉपडाउन सूची में डेटा नहीं मिला",
        updatePasswordTitle: "नया पासवर्ड सेट करें",
        updatePasswordDesc: "नया पासवर्ड सेट करने के लिए, कृपया नया पासवर्ड दर्ज करें और पुष्टि के लिए नया पासवर्ड फिर से दर्ज करें।",
        emailverificationHeading: "ईमेल सत्यापन लिंक भेजा गया!",
        emailVerifyTitle: "ईमेल सत्यापन लिंक भेजा गया!",
        emailVerifyText: "अपने खाते को सक्रिय करने के लिए आपको अपना ईमेल पता सत्यापित करना होगा। आपके ईमेल पते को सत्यापित करने के निर्देश के साथ एक ईमेल आपको भेजा गया है।",
        notReceviedText: "क्या अभी तक आपके इनबॉक्स में ईमेल नहीं मिला?",
        resentEmail: "ईमेल पुनः भेजें",
        expiredActionMessage: "यह क्रिया अब मान्य नहीं है क्योंकि आपने पहले ही प्रक्रिया पूरी कर ली है",
        sryText: "हमें खेद है!",
        backToApplication: "एप्लिकेशन पर वापस जाएं",
        proceedWithAction: "आगे बढ़ने के लिए यहाँ क्लिक करें",
        newPassword: "नया पासवर्ड",
        confNewPassword: "नया पासवर्ड पुष्टि करें",
        missingUsernameMessage: "कृपया वैध ईमेल पता दर्ज करें।",
        expiredActionTokenNoSessionMessage: "लिंक की समय सीमा समाप्त हो गई है, कृपया पुनः प्रयास करें।",
        loginTimeout: "निष्क्रियता के कारण सत्र की समय सीमा समाप्त हो गई है। कृपया पुनः प्रयास करें।",
        invalidPasswordConfirmMessage: "पासवर्ड मेल नहीं खाते। पुनः प्रयास करें।",
        pageExpiredTitle: "सत्र की समय सीमा समाप्त हो गई है!",
        pageExpiredMsg1: "कृपया जहां से आपने छोड़ा था वहां से पुनः आरंभ करने के लिए जारी रखें पर क्लिक करें। अन्यथा नई सत्र शुरू करने के लिए पुनः आरंभ करें पर क्लिक करें।",
        restartProcess: "प्रक्रिया पुनः आरंभ करें",
        continueSession: "सत्र जारी रखें",
        userNameLable: "उपयोगकर्ता नाम / ईमेल पता",
        firstName: "पहला नाम",
        lastName: "अंतिम नाम",
        phoneNumber: "फोन नंबर",
        invalidUserName: "उपयोगकर्ता नाम न्यूनतम आवश्यकताओं को पूरा नहीं करता है।",
        userNamePolicy: "अल्फ़ान्यूमेरिक वर्ण और प्रतीक ( _ ) की अनुमति है। पहला अक्षर हमेशा एक अक्षर होना चाहिए।",
        locale_hin: "हिंदी",
        locale_tam: "தமிழ்",
        locale_kan: "ಕನ್ನಡ",
        doForgotPassword: "पासवर्ड भूल गए?",
        password: "पासवर्ड",
        doRegister: "पंजीकरण करवाना",
        registerTitle: "पंजीकरण करवाना",
        username: "उपयोगकर्ता नाम",
        doSubmit: "जमा करना",
        emailSentMessage: "आपको शीघ्र ही आगे के निर्देशों के साथ एक ईमेल प्राप्त होगी।",
        confirmEmailAddressVerification: "ईमेल पते की वैधता की पुष्टि करें {0}.",
        emailVerifiedMessage: "आपका ईमेल पता सत्यापित हो गया है।",
        accountUpdatedMessage: "आपका खाता अपडेट कर दिया गया है।",
        cookieNotFoundMessage: "कुकी नहीं मिली। कृपया सुनिश्चित करें कि आपके ब्राउज़र में कुकीज़ सक्षम हैं।",
        emailVerifiedAlreadyMessage:"आपका ईमेल पता पहले ही सत्यापित किया जा चुका है.",
        lengthErrMessage: "लंबाई बीच में होनी चाहिए",
        and: "और",
        invalidInput: "अमान्य वर्ण दर्ज किए गए. केवल अक्षर और रिक्त स्थान की अनुमति है.",
        UpdateDetailsDesc: "भागीदार के रूप में पंजीकरण करने के लिए कृपया नीचे दिए गए फ़ील्ड भरें।",
        loginProfileTitle: "लेखा जानकारी को अद्यतन बनाएं"
    },
    tam: {
        alphanumericalCharsOnly: "எழுத்தெண்கள் மட்டுமே",
        gender: "பாலினம்",
        invalidUserMessage: "தவறான பயனர் பெயர் அல்லது கடவுச்சொல்.",
        usernameOrEmail: "பயனர் பெயர் / மின்னஞ்சல்",
        doLogIn: "உள்நுழைய",
        loginDesc: "உங்கள் பதிவு செய்யப்பட்ட மின்னஞ்சல் மற்றும் கடவுச்சொல்லை உள்ளிடவும்",
        regDesc: "பங்குதாரராக பதிவு செய்ய கீழே உள்ள விவரங்களை பூர்த்தி செய்க.",
        namePlaceholder: "பயனர் பெயரை உள்ளிடவும்",
        passwordPlaceholder: "கடவுச்சொல்லை உள்ளிடவும்",
        noAccount: "இன்னும் உறுப்பினராக இல்லை?",
        partnerType: "பங்குதாரர் வகை",
        selectAnOption: "பங்குதாரர் வகையைத் தேர்ந்தெடுக்கவும்",
        orgName: "அமைப்பின் பெயர்",
        address: "முகவரி",
        email: "மின்னஞ்சல் முகவரி",
        backToLogin: "திரும்பச் செல்",
        firstNamePH: "முதற்பெயரை உள்ளிடவும்",
        lastNamePH: "கடைசி பெயரை உள்ளிடவும்",
        orgnamePH: "அமைப்பின் பெயரை உள்ளிடவும்",
        addressPH: "முகவரியை உள்ளிடவும்",
        emailPH: "மின்னஞ்சல் முகவரியை உள்ளிடவும்",
        phoneNumberPH: "தொலைபேசி எண்னை உள்ளிடவும்",
        userNamePH: "பயனர் பெயரை உள்ளிடவும்",
        alreadyMember: "ஏற்கனவே உறுப்பினராக உள்ளீர்களா?",
        requiredFields: "அனைத்து புலங்களும் அவசியம், தவிர்வினை விருப்பமானவை என்று குறிக்கப்படும்",
        missingPartnerTypeMessage: "பங்குதாரர் வகையை குறிப்பிடவும்",
        logInErrorMsg: "தவறான மின்னஞ்சல் முகவரி அல்லது கடவுச்சொல்!",
        registerErrorMsg: "அனைத்து தேவையான புலங்களை பூர்த்தி செய்யவும்",
        passwordInfo: "ஒரு பெரிய மற்றும் ஒரு சிறிய எழுத்துடன் குறைந்தது 8 எழுத்துக்களை கொண்டிருக்க வேண்டும், குறைந்தது ஒரு சிறப்பு எழுத்துக்களை பயன்படுத்தவும்.",
        inputErrorMsg: "உள்ளிடவும்",
        orgInfoMsg: "CA கையெழுத்திடப்பட்ட சான்றிதழில் சான்றிதழ் பொருள் ORGANISATION ATTRIBUTE ல் குறிப்பிடப்பட்டுள்ளபடி அமைப்பின் பெயரை உள்ளிடவும்",
        existingEmailErr: "மின்னஞ்சல் ஏற்கனவே உள்ளது.",
        invalidEmailErr: "தவறான மின்னஞ்சல் முகவரி.",
        passwordConditions: "கடவுச்சொல் குறைந்தபட்ச தேவைகளை பூர்த்தி செய்யவில்லை. தயவுசெய்து மீண்டும் முயற்சிக்கவும்.",
        passwordNotMatch: "கடவுச்சொல் மற்றும் உறுதிசெய்யும் கடவுச்சொல் பொருந்தவில்லை. மீண்டும் முயற்சிக்கவும்.",
        invalidPhoneNo: "சரியான தொலைபேசி எண்ணை உள்ளிடவும்",
        forgotPasswordDesc: "உங்கள் பதிவு செய்யப்பட்ட மின்னஞ்சல் முகவரியை உள்ளிடவும் மற்றும் புதிய கடவுச்சொல் உருவாக்குவதற்கான அறிவுறுத்தல்களை உங்கள் மின்னஞ்சலில் அனுப்புவோம்.",
        resetPassword: "கடவுச்சொல்லை மீட்டமை",
        rememberPW: "கடவுச்சொல் நினைவில் இருக்கிறதா?",
        nosearchData: "கீழே உள்ள பட்டியலில் தரவுகள் கிடைக்கவில்லை",
        updatePasswordTitle: "புதிய கடவுச்சொல்லை அமைக்கவும்",
        updatePasswordDesc: "புதிய கடவுச்சொல்லை அமைக்க, புதிய கடவுச்சொல்லை உள்ளிடவும் மற்றும் உறுதிசெய்ய புதிய கடவுச்சொல்லை மீண்டும் உள்ளிடவும்.",
        emailverificationHeading: "மின்னஞ்சல் சரிபார்ப்பு இணைப்பு அனுப்பப்பட்டது!",
        emailVerifyTitle: "மின்னஞ்சல் சரிபார்ப்பு இணைப்பு அனுப்பப்பட்டது!",
        emailVerifyText: "உங்கள் கணக்கை செயல்படுத்த உங்கள் மின்னஞ்சல் முகவரியை சரிபார்க்க வேண்டும். உங்கள் மின்னஞ்சல் முகவரியை சரிபார்க்கும் அறிவுறுத்தல்களுடன் ஒரு மின்னஞ்சல் அனுப்பப்பட்டுள்ளது.",
        notReceviedText: "உங்கள் மெயில் இன்பாக்ஸில் மின்னஞ்சல் கிடைக்கவில்லையா?",
        resentEmail: "மின்னஞ்சலை மீண்டும் அனுப்பவும்",
        expiredActionMessage: "நீங்கள் இந்த செயல்முறையை ஏற்கனவே முடித்துவிட்டீர்கள் என்பதால் இந்த செயல் இனி செல்லுபடியாகாது",
        sryText: "மன்னிக்கவும்!",
        backToApplication: "பயன்பாட்டுக்கு திரும்பவும்",
        proceedWithAction: "தொடர நெறிமுறையை கிளிக் செய்யவும்",
        newPassword: "புதிய கடவுச்சொல்",
        confNewPassword: "புதிய கடவுச்சொல்லை உறுதிசெய்க",
        missingUsernameMessage: "சரியான மின்னஞ்சல் முகவரியை உள்ளிடவும்.",
        expiredActionTokenNoSessionMessage: "இணைப்பு காலாவதியானது, தயவுசெய்து மீண்டும் முயற்சிக்கவும்.",
        loginTimeout: "செயலற்றதன் காரணமாக அமர்வு நேரம் முடிந்தது. தயவுசெய்து மீண்டும் முயற்சிக்கவும்",
        invalidPasswordConfirmMessage: "கடவுச்சொல் பொருந்தவில்லை. மீண்டும் முயற்சிக்கவும்",
        pageExpiredTitle: "அமர்வு காலாவதியானது!",
        pageExpiredMsg1: "நீங்கள் விட்ட இடத்திலிருந்து தொடர நெறிமுறையை கிளிக் செய்யவும். இல்லையெனில் புதிய அமர்வைத் தொடங்க மறுதொடக்கம் கிளிக் செய்யவும்.",
        restartProcess: "செயல்முறையை மீண்டும் தொடங்கு",
        continueSession: "அமர்வை தொடரவும்",
        userNameLable: "பயனர் பெயர் / மின்னஞ்சல் முகவரி",
        firstName: "முதற்பெயர்",
        lastName: "கடைசிப்பெயர்",
        phoneNumber: "தொலைபேசி எண்",
        invalidUserName: "பயனர் பெயர் குறைந்தபட்ச தேவைகளை பூர்த்தி செய்யவில்லை.",
        userNamePolicy: "எழுத்தெண்கள் மற்றும் சின்னங்கள் ( _ ) அனுமதிக்கப்படும். முதல் எழுத்து எப்போதும் ஒரு எழுத்தாக இருக்க வேண்டும்.",
        locale_hin: "हिंदी",
        locale_tam: "தமிழ்",
        locale_kan: "ಕನ್ನಡ",
        doForgotPassword: "கடவுச்சொல்லை மறந்துவிட்டீர்களா?",
        password: "கடவுச்சொல்",
        doRegister: "பதிவு",
        registerTitle: "பதிவு",
        username: "பயனர் பெயர்",
        doSubmit: "சமர்ப்பிக்கவும்",
        emailSentMessage: "மேலதிக வழிமுறைகளுடன் கூடிய மின்னஞ்சலை விரைவில் பெறுவீர்கள்.",
        confirmEmailAddressVerification: "மின்னஞ்சல் முகவரியின் செல்லுபடித்தன்மையை உறுதிப்படுத்தவும் {0}.",
        emailVerifiedMessage: "உங்கள் மின்னஞ்சல் முகவரி சரிபார்க்கப்பட்டது.",
        accountUpdatedMessage: "உங்கள் கணக்கு புதுப்பிக்கப்பட்டுள்ளது.",
        cookieNotFoundMessage: "குக்கீ காணப்படவில்லை. உங்களின் உலாவியில் குக்கீகள் செயல்படுத்தப்பட்டுள்ளனவா எனச் சரிபார்க்கவும்.",
        emailVerifiedAlreadyMessage:"உங்கள் மின்னஞ்சல் முகவரி ஏற்கனவே சரிபார்க்கப்பட்டது.",
        lengthErrMessage: "இடையே நீளம் இருக்க வேண்டும்",
        and: "மற்றும்",
        invalidInput: "தவறான எழுத்துகள் உள்ளிடப்பட்டுள்ளன. கடிதங்கள் மற்றும் இடைவெளிகள் மட்டுமே அனுமதிக்கப்படுகின்றன.",
        UpdateDetailsDesc: "கூட்டாளராக பதிவு செய்ய கீழே உள்ள புலங்களை நிரப்பவும்.",
        loginProfileTitle: "கணக்குத் தகவலைப் புதுப்பிக்கவும்"
    },
    kan:{
        alphanumericalCharsOnly: "ಅಕ್ಷರಾಂಕ ಲಕ್ಷಣಗಳು ಮಾತ್ರ",
        gender: "ಲಿಂಗ",
        invalidUserMessage: "ಅಮಾನ್ಯವಾದ ಬಳಕೆದಾರ ಹೆಸರು ಅಥವಾ ಪಾಸ್ವರ್ಡ್.",
        usernameOrEmail: "ಬಳಕೆದಾರ ಹೆಸರು / ಇಮೇಲ್ ವಿಳಾಸ",
        doLogIn: "ಲಾಗಿನ್",
        loginDesc: "ಲಾಗಿನ್ ಮಾಡಲು ದಯವಿಟ್ಟು ನಿಮ್ಮ ನೋಂದಾಯಿತ ಇಮೇಲ್ ಮತ್ತು ಪಾಸ್ವರ್ಡ್ ನಮೂದಿಸಿ",
        regDesc: "ಪარტ್ನರ್ ಆಗಿ ನೋಂದಾಯಿಸಲು ದಯವಿಟ್ಟು ಕೆಳಗಿನ ಕ್ಷೇತ್ರಗಳನ್ನು ಭರ್ತಿಮಾಡಿ.",
        namePlaceholder: "ಬಳಕೆದಾರ ಹೆಸರನ್ನು ನಮೂದಿಸಿ",
        passwordPlaceholder: "ಪಾಸ್ವರ್ಡ್ ನಮೂದಿಸಿ",
        noAccount: "ಇನ್ನೂ ಸದಸ್ಯರಲ್ಲವೆ?",
        partnerType: "ಪಾರ್ಟ್ನರ್ ಪ್ರಕಾರ",
        selectAnOption: "ಪಾರ್ಟ್ನರ್ ಪ್ರಕಾರವನ್ನು ಆಯ್ಕೆಮಾಡಿ",
        orgName: "ಸಂಸ್ಥೆಯ ಹೆಸರು",
        address: "ವಿಳಾಸ",
        email: "ಇಮೇಲ್ ವಿಳಾಸ",
        backToLogin: "ಹಿಂದಿರುಗಿ",
        firstNamePH: "ಮೊದಲ ಹೆಸರನ್ನು ನಮೂದಿಸಿ",
        lastNamePH: "ಕೊನೆಯ ಹೆಸರನ್ನು ನಮೂದಿಸಿ",
        orgnamePH: "ಸಂಸ್ಥೆಯ ಹೆಸರನ್ನು ನಮೂದಿಸಿ",
        addressPH: "ವಿಳಾಸವನ್ನು ನಮೂದಿಸಿ",
        emailPH: "ಇಮೇಲ್ ವಿಳಾಸವನ್ನು ನಮೂದಿಸಿ",
        phoneNumberPH: "ಫೋನ್ ಸಂಖ್ಯೆಯನ್ನು ನಮೂದಿಸಿ",
        userNamePH: "ಬಳಕೆದಾರ ಹೆಸರನ್ನು ನಮೂದಿಸಿ",
        alreadyMember: "ಈಗಾಗಲೇ ಸದಸ್ಯರಾ?",
        requiredFields: "ಎಲ್ಲಾ ಕ್ಷೇತ್ರಗಳು ಅಗತ್ಯವಿದೆ, ಆಯ್ಕೆಯಾಗಿ ಗುರುತಿಸಲಾದವುಗಳನ್ನು ಹೊರತುಪಡಿಸಿ",
        missingPartnerTypeMessage: "ದಯವಿಟ್ಟು ಪಾರ್ಟ್ನರ್ ಪ್ರಕಾರವನ್ನು ನಿರ್ದಿಷ್ಟಪಡಿಸಿ",
        logInErrorMsg: "ನಮೂದಿಸಿದ ಇಮೇಲ್ ವಿಳಾಸ ಅಥವಾ ಪಾಸ್ವರ್ಡ್ ಅಮಾನ್ಯ!",
        registerErrorMsg: "ಎಲ್ಲಾ ಅಗತ್ಯ ಕ್ಷೇತ್ರಗಳನ್ನು ಭರ್ತಿಮಾಡಿ",
        passwordInfo: "ಕನ್ನಡ ಅಥವಾ ಇಂಗ್ಲಿಷ್ ಅಕ್ಷರಗಳಲ್ಲಿ 8 ಅಥವಾ ಹೆಚ್ಚು ಅಕ್ಷರಗಳನ್ನು ಬಳಸಿ, ಕನಿಷ್ಠ ಒಂದು ದೊಡ್ಡ ಅಕ್ಷರ ಮತ್ತು ಒಂದು ಸಣ್ಣ ಅಕ್ಷರ.",
        inputErrorMsg: "ದಯವಿಟ್ಟು ನಮೂದಿಸಿ",
        orgInfoMsg: "CA ಸಹಿ ಮಾಡಿದ ಪ್ರಮಾಣಪತ್ರದಲ್ಲಿ ಪ್ರಮಾಣಪತ್ರ ವಿಷಯದ ORGANISATION ATTRIBUTE ನಲ್ಲಿ ಉಲ್ಲೇಖಿಸಿದಂತೆ ಸಂಸ್ಥೆಯ ಹೆಸರನ್ನು ನಮೂದಿಸಿ",
        existingEmailErr: "ಇಮೇಲ್ ಈಗಾಗಲೇ ಅಸ್ತಿತ್ವದಲ್ಲಿದೆ.",
        invalidEmailErr: "ಅಮಾನ್ಯವಾದ ಇಮೇಲ್ ವಿಳಾಸ.",
        passwordConditions: "ಪಾಸ್ವರ್ಡ್ ಕನಿಷ್ಠ ಅಗತ್ಯಗಳನ್ನು ಪೂರೈಸುತ್ತಿಲ್ಲ. ದಯವಿಟ್ಟು ಪುನಃ ಪ್ರಯತ್ನಿಸಿ.",
        passwordNotMatch: "ಪಾಸ್ವರ್ಡ್ ಮತ್ತು ದೃಢೀಕರಣ ಪಾಸ್ವರ್ಡ್ ಹೊಂದುವುದಿಲ್ಲ. ಪುನಃ ಪ್ರಯತ್ನಿಸಿ.",
        invalidPhoneNo: "ಮಾನ್ಯ ಫೋನ್ ಸಂಖ್ಯೆಯನ್ನು ನಮೂದಿಸಿ",
        forgotPasswordDesc: "ದಯವಿಟ್ಟು ನಿಮ್ಮ ನೋಂದಾಯಿತ ಇಮೇಲ್ ವಿಳಾಸವನ್ನು ನಮೂದಿಸಿ ಮತ್ತು ಹೊಸ ಪಾಸ್ವರ್ಡ್ ಅನ್ನು ಹೇಗೆ ರಚಿಸಬೇಕು ಎಂಬ ಮಾಹಿತಿ ನಿಮ್ಮ ಇಮೇಲ್ ಗೆ ಕಳುಹಿಸುತ್ತೇವೆ.",
        resetPassword: "ಪಾಸ್ವರ್ಡ್ ಮರುಹೊಂದಿಸಿ",
        rememberPW: "ಪಾಸ್ವರ್ಡ್ ನೆನಪಿದೆಯೆ?",
        nosearchData: "ಡ್ರಾಪ್‌ಡೌನ್ ಪಟ್ಟಿಯಲ್ಲಿ ಡೇಟಾ ಕಾಣಿಸಲಿಲ್ಲ",
        updatePasswordTitle: "ಹೊಸ ಪಾಸ್ವರ್ಡ್ ಹೊಂದಿಸಿ",
        updatePasswordDesc: "ಹೊಸ ಪಾಸ್ವರ್ಡ್ ಹೊಂದಿಸಲು, ದಯವಿಟ್ಟು ಹೊಸ ಪಾಸ್ವರ್ಡ್ ನಮೂದಿಸಿ ಮತ್ತು ದೃಢೀಕರಣಕ್ಕಾಗಿ ಹೊಸ ಪಾಸ್ವರ್ಡ್ ಮತ್ತೆ ನಮೂದಿಸಿ.",
        emailverificationHeading: "ಇಮೇಲ್ ದೃಢೀಕರಣ ಲಿಂಕ್ ಕಳುಹಿಸಲಾಗಿದೆ!",
        emailVerifyTitle: "ಇಮೇಲ್ ದೃಢೀಕರಣ ಲಿಂಕ್ ಕಳುಹಿಸಲಾಗಿದೆ!",
        emailVerifyText: "ನಿಮ್ಮ ಖಾತೆಯನ್ನು ಸಕ್ರಿಯಗೊಳಿಸಲು ನೀವು ನಿಮ್ಮ ಇಮೇಲ್ ವಿಳಾಸವನ್ನು ದೃಢೀಕರಿಸಬೇಕು. ನಿಮ್ಮ ಇಮೇಲ್ ವಿಳಾಸವನ್ನು ದೃಢೀಕರಿಸಲು ಸೂಚನೆಗಳೊಂದಿಗೆ ಒಂದು ಇಮೇಲ್ ನಿಮಗೆ ಕಳುಹಿಸಲಾಗಿದೆ.",
        notReceviedText: "ನಿಮ್ಮ ಇನ್ಬಾಕ್ಸ್ನಲ್ಲಿ ಇನ್ನೂ ಇಮೇಲ್ ಬಂದಿಲ್ಲವೆ?",
        resentEmail: "ಇಮೇಲ್ ಮತ್ತೆ ಕಳುಹಿಸಿ",
        expiredActionMessage: "ನೀವು ಈ ಪ್ರಕ್ರಿಯೆಯನ್ನು ಈಗಾಗಲೇ ಪೂರ್ಣಗೊಳಿಸಿರುವುದರಿಂದ ಈ ಕ್ರಿಯೆ ಇನ್ನು ಮುಂದೆ ಮಾನ್ಯವಲ್ಲ",
        sryText: "ಕ್ಷಮಿಸಿ!",
        backToApplication: "ಅಪ್ಲಿಕೇಶನ್ ಗೆ ಹಿಂತಿರುಗಿ",
        proceedWithAction: "ಮುಂದುವರೆಯಲು ಇಲ್ಲಿ ಕ್ಲಿಕ್ ಮಾಡಿ",
        newPassword: "ಹೊಸ ಪಾಸ್ವರ್ಡ್",
        confNewPassword: "ಹೊಸ ಪಾಸ್ವರ್ಡ್ ದೃಢೀಕರಿಸಿ",
        missingUsernameMessage: "ಮಾನ್ಯ ಇಮೇಲ್ ವಿಳಾಸ ನಮೂದಿಸಿ.",
        expiredActionTokenNoSessionMessage: "ಲಿಂಕ್ ಅವಧಿ ಮೀರಿದೆ, ದಯವಿಟ್ಟು ಪುನಃ ಪ್ರಯತ್ನಿಸಿ.",
        loginTimeout: "ನಿಷ್ಕ್ರಿಯತೆಯ ಕಾರಣದಿಂದಾಗಿ ಸೆಷನ್ ಅವಧಿ ಮೀರಿದೆ. ದಯವಿಟ್ಟು ಪುನಃ ಪ್ರಯತ್ನಿಸಿ",
        invalidPasswordConfirmMessage: "ಪಾಸ್ವರ್ಡ್ ಹೊಂದುವುದಿಲ್ಲ. ಪುನಃ ಪ್ರಯತ್ನಿಸಿ",
        pageExpiredTitle: "ಸೆಷನ್ ಅವಧಿ ಮೀರಿದೆ!",
        pageExpiredMsg1: "ನೀವು ಬಿಟ್ಟ ಸ್ಥಳದಿಂದ ಮುಂದುವರಿಯಲು ದಯವಿಟ್ಟು ಮುಂದುವರಿಯಲು ಕ್ಲಿಕ್ ಮಾಡಿ. ಇಲ್ಲದಿದ್ದರೆ ಹೊಸ ಸೆಷನ್ ಪ್ರಾರಂಭಿಸಲು ಪುನಃ ಪ್ರಾರಂಭಿಸಲು ಕ್ಲಿಕ್ ಮಾಡಿ.",
        restartProcess: "ಪ್ರಕ್ರಿಯೆಯನ್ನು ಪುನಃ ಪ್ರಾರಂಭಿಸಿ",
        continueSession: "ಸೆಷನ್ ಮುಂದುವರಿಸಿ",
        userNameLable: "ಬಳಕೆದಾರ ಹೆಸರು / ಇಮೇಲ್ ವಿಳಾಸ",
        firstName: "ಮೊದಲ ಹೆಸರು",
        lastName: "ಕೊನೆಯ ಹೆಸರು",
        phoneNumber: "ದೂರವಾಣಿ ಸಂಖ್ಯೆ",
        invalidUserName: "ಬಳಕೆದಾರ ಹೆಸರು ಕನಿಷ್ಠ ಅಗತ್ಯಗಳನ್ನು ಪೂರೈಸುತ್ತಿಲ್ಲ.",
        userNamePolicy: "ಅಕ್ಷರಾಂಕ ಅಕ್ಷರಗಳು ಮತ್ತು ಸಂಕೇತಗಳು ( _ ) ಅನುಮತಿಸಲಾಗಿದೆ. ಮೊದಲ ಅಕ್ಷರ ಯಾವಾಗಲೂ ಒಂದು ಅಕ್ಷರವಾಗಿರಬೇಕು.",
        locale_hin: "हिंदी",
        locale_tam: "தமிழ்",
        locale_kan: "ಕನ್ನಡ",
        doForgotPassword: "ಪಾಸ್ವರ್ಡ್ ಮರೆತಿರಾ?",
        password: "ಗುಪ್ತಪದ",
        doRegister: "ನೋಂದಣಿ",
        registerTitle: "ನೋಂದಣಿ",
        username: "ಬಳಕೆದಾರ ಹೆಸರು",
        doSubmit: "ಸಲ್ಲಿಸು",
        emailSentMessage: "ಹೆಚ್ಚಿನ ಸೂಚನೆಗಳೊಂದಿಗೆ ನೀವು ಶೀಘ್ರದಲ್ಲೇ ಇಮೇಲ್ ಅನ್ನು ಸ್ವೀಕರಿಸಬೇಕು.",
        confirmEmailAddressVerification: "ಇಮೇಲ್ ವಿಳಾಸದ ಮಾನ್ಯತೆಯನ್ನು ದೃಢೀಕರಿಸಿ {0}.",
        emailVerifiedMessage: "ನಿಮ್ಮ ಇಮೇಲ್ ವಿಳಾಸವನ್ನು ಪರಿಶೀಲಿಸಲಾಗಿದೆ.",
        accountUpdatedMessage: "ನಿಮ್ಮ ಖಾತೆಯನ್ನು ನವೀಕರಿಸಲಾಗಿದೆ.",
        cookieNotFoundMessage: "ಕುಕೀ ಕಂಡುಬಂದಿಲ್ಲ. ದಯವಿಟ್ಟು ನಿಮ್ಮ ಬ್ರೌಸರ್‌ನಲ್ಲಿ ಕುಕೀಗಳನ್ನು ಸಕ್ರಿಯಗೊಳಿಸಲಾಗಿದೆಯೇ ಎಂದು ಖಚಿತಪಡಿಸಿ.",
        emailVerifiedAlreadyMessage:"ನಿಮ್ಮ ಇಮೇಲ್ ವಿಳಾಸವನ್ನು ಈಗಾಗಲೇ ಪರಿಶೀಲಿಸಲಾಗಿದೆ.",
        lengthErrMessage: "ಉದ್ದವು ನಡುವೆ ಇರಬೇಕು",
        and: "ಮತ್ತು",
        invalidInput: "ಅಮಾನ್ಯ ಅಕ್ಷರಗಳನ್ನು ನಮೂದಿಸಲಾಗಿದೆ. ಅಕ್ಷರಗಳು ಮತ್ತು ಸ್ಥಳಗಳನ್ನು ಮಾತ್ರ ಅನುಮತಿಸಲಾಗಿದೆ.",
        UpdateDetailsDesc: "ಪಾಲುದಾರರಾಗಿ ನೋಂದಾಯಿಸಲು ದಯವಿಟ್ಟು ಕೆಳಗಿನ ಕ್ಷೇತ್ರಗಳನ್ನು ಭರ್ತಿ ಮಾಡಿ.",
        loginProfileTitle: "ಖಾತೆ ಮಾಹಿತಿಯನ್ನು ನವೀಕರಿಸಿ"
    }
       
});

export type I18n = NonNullable<ReturnType<typeof useI18n>>;
