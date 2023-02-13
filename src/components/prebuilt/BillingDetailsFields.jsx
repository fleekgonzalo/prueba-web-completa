import FormField from "./FormField";


const BillingDetailsFields = () => {
  return (
    <>
    <div className="flex justify-center mt-[25px] gap-[20px]">
      <div>
        <p>Nombre</p>
          <FormField
            name="name"
            type="text"
            placeholder="Jane Doe"
            required
          />
          <br></br>
          <p>Dirección</p>
          <FormField
            name="address"
            type="text"
            placeholder="Calle Berry 14"
            required
          />
          <br></br>
          <p>Provincia</p>
          <FormField
            name="state"
            type="text"
            placeholder="Madrid"
            required
          />
      </div>
      <div>
          <p>Email</p>
          <FormField
            name="email"
            type="email"
            placeholder="jane.doe@ejemplo.com"
            required
          />
          <br></br>
          <p>Ciudad</p>
          <FormField
            name="city"
            type="text"
            placeholder="Madrid"
            required
          />
          <br></br>
          <p>Código Postal</p>
          <FormField
            name="zip"
            type="text"
            placeholder="94103"
            required
          />
      </div>
    </div>
    </>
  );
};

export default BillingDetailsFields;
