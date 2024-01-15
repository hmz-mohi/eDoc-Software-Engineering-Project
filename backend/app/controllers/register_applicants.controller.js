const db = require('../models'); // Assuming your models are in a 'models' directory

exports.createDoctor = async (req, res) => {
  try {
    const {
      firstName,
      lastName,
      dob,
      email,
      phoneNumber,
      address,
      startTime,
      endTime,
      duration,
      middleSchool,
      highSchool,
      college,
      specialization,
      certificationFiles,
      nationality,
      cnic,
      profilePicture,
      userName,
      password,
    } = req.body;

    const newDoctor = {
      firstName,
      lastName,
      dob,
      email,
      phoneNumber,
      address,
      startTime,
      endTime,
      duration,
      middleSchoolInstitution: middleSchool.institution,
      middleSchoolGrade: middleSchool.grade,
      highSchoolInstitution: highSchool.institution,
      highSchoolGrade: highSchool.grade,
      collegeInstitution: college.institution,
      collegeGrade: college.grade,
      specialization,
      certificationFiles,
      nationality,
      cnic,
      profilePicture,
      userName,
      password,
    };

    // Insert the new doctor data into the Doctor model
    const createdDoctor = await db.register_applicants.create(newDoctor);

    res.status(201).json({
      success: true,
      message: 'Doctor registered successfully',
      doctorId: createdDoctor.id,
    });
  } catch (error) {
    console.error('Error registering doctor:', error);
    res.status(500).json({ success: false, message: 'Internal server error' });
  }
};
