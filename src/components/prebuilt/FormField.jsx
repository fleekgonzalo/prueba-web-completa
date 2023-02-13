import styled from 'styled-components';

const FormFieldContainer = styled.div`
  display: -ms-flexbox;
  display: flex;
  -ms-flex-align: center;
  align-items: center;
  
  

  &:first-of-type {
    border-top: none;
  }
`;

const Label = styled.label`
  width: 0%;
  min-width: 0px;
  padding: 11px 0;
  color: white;
  overflow: hidden;
  font-size: 16px;
  text-overflow: ellipsis;
  white-space: nowrap;
  border-right: 1px solid white;
`;

const Input = styled.input`
  
  font-size: 16px;
  width: 100%;
  padding: 11px 15px 11px 8px;
  color: #fff;
  background-color: transparent;
  animation: 1ms void-animation-out;

  &::placeholder {
    color: grey;
  }
`;

const FormField = ({ label, type, name, placeholder, required }) => {
  return (
    <FormFieldContainer>
      <Label htmlFor={name}>{label}</Label>
      <Input name={name} type={type} placeholder={placeholder} required />
    </FormFieldContainer>
  );
};

export default FormField;
