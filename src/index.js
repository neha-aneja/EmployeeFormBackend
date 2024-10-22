const express = require('express');
const mariadb = require('mariadb');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

const pool = mariadb.createPool({
  host: 'localhost',
  user: 'root',
  password: 'M@r1@',
  database: 'employee_db',
  connectionLimit: 5,
});

app.use(bodyParser.json());

app.post('/employees', async (req, res) => {
  const {
    EmployeeName,
    JobPosition,
    WorkMobile,
    WorkPhone,
    WorkEmail,
    Department,
    Manager,
    Coach,
    Resume,
    Skills,
    WorkAddress,
    WorkLocation,
    Expense,
    TimeOff,
    WorkingHours,
    Timezone,
    Roles,
    DefaultRole,
    Address,
    Email,
    Phone,
    Language,
    HomeWorkDistance,
    PrivateCarPlate,
    MaritalStatus,
    NumberOfDependentChildren,
    ContactName,
    ContactPhone,
    CertificateLevel,
    FieldOfStudy,
    School,
    Nationality,
    IdentificationNo,
    PassportNo,
    Gender,
    DateOfBirth,
    PlaceOfBirth,
    CountryOfBirth,
    NonResident,
    VisaNo,
    WorkPermitNo,
    VisaExpireDate,
    WorkPermitExpirationDate,
    WorkPermit,
    EmployeeType,
    RelatedUser,
    PinCode,
    BadgeId,
    RegistrationNumberOfTheEmployee,
    HourlyCost,
    FleetMobilityCard,
  } = req.body;

  const sql = `INSERT INTO employees (EmployeeName, JobPosition, WorkMobile, WorkPhone, WorkEmail, Department, Manager, Coach, Resume, Skills, WorkAddress, WorkLocation, Expense, TimeOff, WorkingHours, Timezone, Roles, DefaultRole, Address, Email, Phone, Language, HomeWorkDistance, PrivateCarPlate, MaritalStatus, NumberOfDependentChildren, ContactName, ContactPhone, CertificateLevel, FieldOfStudy, School, Nationality, IdentificationNo, PassportNo, Gender, DateOfBirth, PlaceOfBirth, CountryOfBirth, NonResident, VisaNo, WorkPermitNo, VisaExpireDate, WorkPermitExpirationDate, WorkPermit, EmployeeType, RelatedUser, PinCode, BadgeId, RegistrationNumberOfTheEmployee, HourlyCost, FleetMobilityCard) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`;

  try {
    const conn = await pool.getConnection();
    const result = await conn.query(sql, [
      EmployeeName,
      JobPosition,
      WorkMobile,
      WorkPhone,
      WorkEmail,
      Department,
      Manager,
      Coach,
      Resume,
      Skills,
      WorkAddress,
      WorkLocation,
      Expense,
      TimeOff,
      WorkingHours,
      Timezone,
      Roles,
      DefaultRole,
      Address,
      Email,
      Phone,
      Language,
      HomeWorkDistance,
      PrivateCarPlate,
      MaritalStatus,
      NumberOfDependentChildren,
      ContactName,
      ContactPhone,
      CertificateLevel,
      FieldOfStudy,
      School,
      Nationality,
      IdentificationNo,
      PassportNo,
      Gender,
      DateOfBirth,
      PlaceOfBirth,
      CountryOfBirth,
      NonResident,
      VisaNo,
      WorkPermitNo,
      VisaExpireDate,
      WorkPermitExpirationDate,
      WorkPermit,
      EmployeeType,
      RelatedUser,
      PinCode,
      BadgeId,
      RegistrationNumberOfTheEmployee,
      HourlyCost,
      FleetMobilityCard,
    ]);

    conn.release();

    res.status(201).json({
      message: 'Employee created successfully',
      employeeId: result.insertId,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Database error' });
  }
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
