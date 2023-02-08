const Register = artifacts.require("Register");
const studentHashes = ["0xfa5358fd7688fc08423a37459877215dcc2feb9eead768ff0b7e32c9311c2b94","0x5d3c5a64145e704481a60f32600a239c283fcb48dec81aaff59b13d9cca89a06","0x58797ea04b79bbd341e11089b92ebab015b0053299578f0ad801c8ca79d68db0","0x6ac79a6bd1f24a4ef77226c20d2c4ce395ce3ded1ce9b24dbf3e17b877af50e1","0x8d8277420786cd86860bf647e7adadad41bef071ed89848ecbd9e501bfe72dc5"];


module.exports = function (deployer) {
	deployer.deploy(Register,studentHashes);
};
