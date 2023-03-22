/**
 * Created by sunqiangjie on 22/07/11.
 */

 export function isvalidUsername (str) {
  const validMap = ['admin', 'editor']
  return validMap.indexOf(str.trim()) >= 0
}

/* 合法uri */
export function validateURL (textval) {
  const urlregex = /^(https?|ftp):\/\/([a-zA-Z0-9.-]+(:[a-zA-Z0-9.&%$-]+)*@)*((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9][0-9]?)(\.(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9]?[0-9])){3}|([a-zA-Z0-9-]+\.)*[a-zA-Z0-9-]+\.(com|edu|gov|int|mil|net|org|biz|arpa|info|name|pro|aero|coop|museum|[a-zA-Z]{2}))(:[0-9]+)*(\/($|[a-zA-Z0-9.,?'\\+&%$#=~_-]+))*$/
  return urlregex.test(textval)
}

/* 小写字母 */
export function validateLowerCase (str) {
  const reg = /^[a-z]+$/
  return reg.test(str)
}

/* 大写字母 */
export function validateUpperCase (str) {
  const reg = /^[A-Z]+$/
  return reg.test(str)
}

/* 大小写字母 */
export function validatAlphabets (str) {
  const reg = /^[A-Za-z]+$/
  return reg.test(str)
}
/**
 * @description 企业对公帐号验证
 */
 export const isCompanyBankCardValids = (rule,bankcard,callback) => {
  const reg = /^[1-9]\d{7,29}$/;
  
  if (bankcard === "") {
    callback(new Error("请输入企业对公帐号"));
  } else if (!reg.test(bankcard)) {
    callback(new Error("请正确输入企业对公帐号格式"));
  } else {
    callback();
  }
};

/**
 * @description 身份证验证
 */
 export const isICardValids = (rule,idCard,callback) => {
  const reg = /^[1-9]\d{7}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}$|^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}([0-9]|X)$/;
  
  if (idCard === "") {
    callback(new Error("请输入身份证号"));
  } else if (!reg.test(idCard)) {
    callback(new Error("请正确输入身份证号格式"));
  } else {
    callback();
  }
};
/**
 * @description 电话号码验证
 */
export const isPhoneValids = (phone) => {
  const reg = /^1[0-9]{10}$/;
  if (phone === "") {
    return false;
  } else if (!reg.test(phone)) {
    return false
  } else {
    return true;
  }
};