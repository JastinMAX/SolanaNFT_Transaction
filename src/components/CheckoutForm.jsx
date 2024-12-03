import React, { useEffect, useState } from "react";
import "./CheckoutForm.css"; // Import CSS file
import { useWallet } from "@solana/wallet-adapter-react";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import { toast } from "react-toastify";

export default function CheckoutForm({ submitOrder, loading }) {
  const wallet = useWallet();
  const [canSubmit, setCanSubmit] = useState(false);
  useEffect(() => {
    if (!wallet.publicKey) {
      setCanSubmit(false);
    } else {
      setCanSubmit(true);
    }
  }, [wallet]);

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    addressLine1: "",
    addressLine2: "",
    city: "",
    state: "",
    postalCode: "",
    country: "",
    cardNumber: "",
    expiryDate: "",
    cvv: "",
  });
  const [size, setSize] = useState(""); // Add size state

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    // setFormData((prevData) => ({
    //   ...prevData,
    //   [name]: value,
    // }));
  };

  // Separate handler for size dropdown
  const handleSizeChange = (e) => {
    setSize(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Form Data on Submit:", formData); // Ensure size is correct

    if (!size) {
      toast.warn("Please select a size.");
      return;
    }
    submitOrder(formData, size);
  };

  return (
    <form onSubmit={handleSubmit} className="w-full p-5 bg-slate-100 rounded-md shadow-md">
      <h2 className="mb-5">Billing Information</h2>

      <div className="form-pg">
        <div className="form-group w-full">
          <label className="ml-2">Full Name</label>
          <input
            type="text"
            name="fullName"
            className="mint_inp"
            value={formData.fullName}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group w-full">
          <label className="ml-2">Email</label>
          <input
            type="email"
            name="email"
            className="mint_inp"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
      </div>

      <div className="form-pg">
        {" "}
        <div className="form-group form-g">
          <label className="ml-2">Phone</label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            className="mint_inp"
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group form-g">
          <label className="ml-2">Size</label>
          <select
            name="size"
            value={formData.size}
            className="mint_inp"
            onChange={handleSizeChange}
            required
          >
            <option value="">Select Size</option>
            <option value="Small">Small</option>
            <option value="Medium">Medium</option>
            <option value="Large">Large</option>
            <option value="XLarge">X-Large</option>
          </select>
        </div>
      </div>

      <h2 className="my-5">Shipping Address</h2>

      <div className="form-pg">
        <div className="form-group form-g">
          <label className="ml-2">Address Line 1</label>
          <input
            type="text"
            name="addressLine1"
            className="mint_inp"
            value={formData.addressLine1}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group form-g">
          <label className="ml-2">City</label>
          <input
            type="text"
            name="city"
            className="mint_inp"
            value={formData.city}
            onChange={handleChange}
            required
          />
        </div>
      </div>

      <div className="form-pg">
        {" "}
        <div className="form-group form-g">
          <label className="ml-2">State/Province</label>
          <input
            type="text"
            name="state"
            className="mint_inp"
            value={formData.state}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group form-g">
          <label className="ml-2">Postal Code</label>
          <input
            type="text"
            name="postalCode"
            className="mint_inp"
            value={formData.postalCode}
            onChange={handleChange}
            required
          />
        </div>
      </div>

      <div className="form-group">
        <label className="ml-2">Country</label>
        <input
          type="text"
          name="country"
          value={formData.country}
          onChange={handleChange}
          required
        />
      </div>

      <div className="pb-5"></div>

      <button
        type="submit"
        disabled={canSubmit ? false : true}
        className={`submit-button cursor-pointer flex items-center justify-center gap-2 ${
          canSubmit === true ? "block" : "hidden"
        }`}
      >
        <AiOutlineLoading3Quarters
          className={`btn_loader ${loading === true ? "block" : "hidden"}`}
        />{" "}
        Mint and Order!
      </button>
      <div
        onClick={() => toast.warn("Kindly connect your wallet first!")}
        type="submit"
        className={`submit-button cursor-pointer justify-center items-center ${
          canSubmit === false ? "flex" : "hidden"
        }`}
      >
        Mint and Order!
      </div>
    </form>
  );
}
