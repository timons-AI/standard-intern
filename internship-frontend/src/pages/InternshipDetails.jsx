import React from 'react';
import { useRouter } from 'next/router';

const InternshipDetails = () => {
  const router = useRouter();
  const { id } = router.query;

  // Fetch internship details based on the `id` from the URL query parameter
  // You can use this information to display internship details and implement additional logic

  return (
    <div>
      <h1>Internship Details</h1>
      <p>Internship ID: {id}</p>
      {/* Your internship details UI and logic */}
    </div>
  );
};

export default InternshipDetails;
