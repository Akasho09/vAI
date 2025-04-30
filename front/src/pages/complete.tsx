import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

// Extract the form input component for reusability
interface InputFieldProps {
  label: string;
  type: string;
  id: string;
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  error?: string;
}

const InputField: React.FC<InputFieldProps> = ({ label, type, id, name, value, onChange, error }) => (
  <div>
    <label className="block text-sm font-medium text-gray-700" htmlFor={id}>
      {label}
    </label>
    {type === "textarea" ? (
      <textarea
        id={id}
        name={name}
        value={value}
        onChange={onChange}
        className="mt-2 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
      />
    ) : (
      <input
        type={type}
        id={id}
        name={name}
        value={value}
        onChange={onChange}
        className="mt-2 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
      />
    )}
    {error && <p className="text-red-500 text-sm">{error}</p>}
  </div>
);

interface UserProfile {
  firstname: string;
  lastname: string;
  avatarUrl: string;
  bio: string;
  location: string;
  website: string;
  mobile: string;
}

export default function ProfilePage() {
  const navigate = useNavigate();
  const [user, setUser] = useState<UserProfile | null>(null);
  const [formData, setFormData] = useState<UserProfile>({
    firstname: "",
    lastname: "",
    avatarUrl: "",
    bio: "",
    location: "",
    website: "",
    mobile: "",
  });
  const [errors, setErrors] = useState<any>({});
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        setIsLoading(true);
        const token = localStorage.getItem("token");
        const response = await axios.get("http://localhost:3000/api/info/getme", {
          headers: { Authorization: `Bearer ${token}` },
        });
        setUser(response.data.user);
        setFormData(response.data.user); // Initialize form fields with user data
      } catch (error) {
        console.error("Error fetching user details:", error);
        navigate("/signin");
      } finally {
        setIsLoading(false);
      }
    };

    fetchUserData();
  }, [navigate]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };

  const validateForm = () => {
    let formErrors: any = {};
    let isValid = true;

    // Only validate required fields
    if (!formData.firstname) {
      formErrors.firstname = "First Name is required";
      isValid = false;
    }
    if (!formData.lastname) {
      formErrors.lastname = "Last Name is required";
      isValid = false;
    }
    if (!formData.mobile) {
      formErrors.mobile = "Mobile Number is required";
      isValid = false;
    }

    // Additional validation for specific fields
    if (formData.website && !/^https?:\/\/[^\s]+$/.test(formData.website)) {
      formErrors.website = "Please enter a valid website URL.";
      isValid = false;
    }

    if (formData.mobile && !/^\d{10}$/.test(formData.mobile)) {
      formErrors.mobile = "Please enter a valid mobile number (10 digits).";
      isValid = false;
    }

    setErrors(formErrors);
    return isValid;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    try {
      const token = localStorage.getItem("token");
      await axios.put(
        "http://localhost:3000/api/info/update",
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      alert("Profile updated successfully!");
      navigate("/dashboard");
    } catch (error) {
      console.error("Error updating profile:", error);
      alert("Failed to update profile");
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-8 bg-white shadow-lg rounded-lg">
      <h1 className="text-3xl font-semibold text-center text-gray-800 mb-6">Update Profile</h1>
      {isLoading ? (
        <div className="flex justify-center items-center">Loading...</div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <InputField
              label="First Name"
              type="text"
              id="firstname"
              name="firstname"
              value={formData.firstname}
              onChange={handleChange}
              error={errors.firstname}
            />
            <InputField
              label="Last Name"
              type="text"
              id="lastname"
              name="lastname"
              value={formData.lastname}
              onChange={handleChange}
              error={errors.lastname}
            />
          </div>

          <InputField
            label="Avatar URL"
            type="text"
            id="avatarUrl"
            name="avatarUrl"
            value={formData.avatarUrl}
            onChange={handleChange}
            error={errors.avatarUrl}
          />
          
          <InputField
            label="Bio"
            type="textarea"
            id="bio"
            name="bio"
            value={formData.bio}
            onChange={handleChange}
            error={errors.bio}
          />

          <InputField
            label="Location"
            type="text"
            id="location"
            name="location"
            value={formData.location}
            onChange={handleChange}
            error={errors.location}
          />

          <InputField
            label="Website"
            type="url"
            id="website"
            name="website"
            value={formData.website}
            onChange={handleChange}
            error={errors.website}
          />

          <InputField
            label="Mobile Number"
            type="tel"
            id="mobile"
            name="mobile"
            value={formData.mobile}
            onChange={handleChange}
            error={errors.mobile}
          />

          <button
            type="submit"
            className="mt-4 w-full px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            Update Profile
          </button>
        </form>
      )}
    </div>
  );
}
