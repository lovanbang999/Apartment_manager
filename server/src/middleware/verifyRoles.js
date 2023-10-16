const verifyRoles = (...allowedRoles) => {
    return (req, res, next) => {
        if (!req?.roles) return res.status(401).json({ success: true, message: "User don't have permission!" });

        const rolesArray = [...allowedRoles];
        console.log(rolesArray);
        console.log(req.roles);
        const result = req.roles.map((role) => rolesArray.includes(role)).find((value) => value === true);
        if (!result) return res.status(401).json({ success: true, message: "User don't have permission to access!" });

        next();
    };
};

module.exports = verifyRoles;
