//@desc    Get All Bootcamps
//@route   GET /api/v1/bootcamps
//@access  Public
exports.getBootcamps = (req, res, next) => {
  res.status(200).json({ success: "true", msg: `Get All Bootcamps` });
};

//@desc    Get Single Bootcamp
//@route   GET /api/v1/bootcamps/:id
//@access  Public
exports.getBootcamp = (req, res, next) => {
  res
    .status(200)
    .json({ success: "true", msg: `Get Single Bootcamp ${req.params.id}` });
};

//@desc    Create Bootcamp
//@route   POST /api/v1/bootcamps
//@access  Private
exports.createBootcamp = (req, res, next) => {
  res.status(200).json({ success: "true", msg: `Create Bootcamp` });
};

//@desc    Update Bootcamp
//@route   PUT /api/v1/bootcamps/:id
//@access  Private
exports.updateBootcamp = (req, res, next) => {
  res
    .status(200)
    .json({ success: "true", msg: `Update Single Bootcamp ${req.params.id}` });
};

//@desc    Delete Bootcamp
//@route   DELETE /api/v1/bootcamps/:id
//@access  Private
exports.deleteBootcamp = (req, res, next) => {
  res
    .status(200)
    .json({ success: "true", msg: `Delete Bootcamp ${req.params.id}` });
};
