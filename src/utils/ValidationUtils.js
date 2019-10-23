class ValidationUtils {
    
    cleanMaskCnpj(cnpj){
      return cnpj.replace(".","").replace(".","").replace("/","").replace("-","");
    }
  
    cleanMaskCpf(cpf){
      return cpf.replace(".","").replace(".","").replace("-","");
    }
  }
  
  let validationUtil = new ValidationUtils();
  export { validationUtil };