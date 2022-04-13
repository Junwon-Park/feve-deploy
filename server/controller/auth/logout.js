const logout = async (req, res) => {
  res
    .cookie('refreshToken', null, {
      httpOnly: true,
      sameSite: 'None',
      secure: true,
      maxAge: 0
    })
    .status(200) // OK
    .json({ data: null, message: 'Logged out successed!!!' });
};

module.exports = { logout };
