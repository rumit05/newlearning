import React, { useState } from 'react';
import './css/FamilyDetaile.css';

export default function FamilyDetaile() {
  const [fullName, setFullName] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const [address, setAddress] = useState('');
  const [occupationType, setOccupationType] = useState('');
  const [jobTitle, setJobTitle] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [businessName, setBusinessName] = useState('');
  const [businessType, setBusinessType] = useState('');
  const [members, setMembers] = useState([]);

  const addMember = () => {
    setMembers([
      ...members,
      {
        relation: '',
        name: '',
        mobile: '',
        dob: '',
        isStudent: '',
        schoolOrCollege: '',
        jobOrChild: '',
        jobDetail: '',
      },
    ]);
  };

  const updateMember = (index, field, value) => {
    const updated = [...members];
    updated[index][field] = value;

    if (field === 'isStudent') {
      if (value === 'student') {
        updated[index].jobOrChild = '';
        updated[index].jobDetail = '';
      } else {
        updated[index].schoolOrCollege = '';
      }
    }

    if (field === 'jobOrChild' && value !== 'job' && value !== 'other') {
      updated[index].jobDetail = '';
    }

    setMembers(updated);
  };

  const removeMember = (index) => {
    const updated = [...members];
    updated.splice(index, 1);
    setMembers(updated);
  };

  const handleSubmit = () => {
    const formData = {
      fullName,
      mobileNumber,
      address, 
      occupationType,
      jobTitle,
      companyName,
      businessName,
      businessType,
      members,
    };
    console.log('Form Submitted:', formData);
    alert("Form submitted! Check console.");
  };

  const isChild = (relation) =>
    relation.toLowerCase() === 'son' || relation.toLowerCase() === 'daughter';

  return (
    <div className="family-form">
      <h2>Family Detail Form</h2>

      <div className="form-group row">
        <label htmlFor="fullname">Full Name:</label>
        <input
          id="fullname"
          type="text"
          className="input"
          placeholder="Your Full Name"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
        />
      </div>

      <div className="form-group row">
        <label htmlFor="mobile">Mobile Number:</label>
        <input
          id="mobile"
          type="text"
          className="input"
          placeholder="Your Mobile Number"
          value={mobileNumber}
          onChange={(e) => setMobileNumber(e.target.value)}
        />
      </div>
      <div className="form-group row">
        <label htmlFor="address">Address:</label>
        <input
            id="address"
            type="text"
            className="input"
            placeholder="Your Address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
        />
      </div>

      <div className="form-group row">
        <label>Occupation Type:</label>
        <div className="radio-inline-group">
          <label>
            <input
              type="radio"
              name="occupation"
              value="job"
              checked={occupationType === 'job'}
              onChange={(e) => setOccupationType(e.target.value)}
            />
            Job
          </label>
          <label>
            <input
              type="radio"
              name="occupation"
              value="business"
              checked={occupationType === 'business'}
              onChange={(e) => setOccupationType(e.target.value)}
            />
            Business
          </label>
        </div>
      </div>

      {occupationType === 'job' && (
        <>
          <div className="form-group row">
            <label>Job Title:</label>
            <input
              type="text"
              placeholder="e.g. Software Engineer"
              value={jobTitle}
              onChange={(e) => setJobTitle(e.target.value)}
            />
          </div>
          <div className="form-group row">
            <label>Company Name:</label>
            <input
              type="text"
              placeholder="e.g. Google"
              value={companyName}
              onChange={(e) => setCompanyName(e.target.value)}
            />
          </div>
        </>
      )}

      {occupationType === 'business' && (
        <>
          <div className="form-group row">
            <label>Business Name:</label>
            <input
              type="text"
              placeholder="e.g. Savaliya Enterprises"
              value={businessName}
              onChange={(e) => setBusinessName(e.target.value)}
            />
          </div>
          <div className="form-group row">
            <label>Business Type:</label>
            <input
              type="text"
              placeholder="e.g. Retail, Manufacturing"
              value={businessType}
              onChange={(e) => setBusinessType(e.target.value)}
            />
          </div>
        </>
      )}

      <div className="add-button">
        <button onClick={addMember}>+ Add Family Member</button>
      </div>

      {members.map((member, index) => (
        <div key={index} className="member-card">
          <h4>Member {index + 1}</h4>

          <div className="form-group row">
            <label>Relation:</label>
            <input
              type="text"
              placeholder="e.g., Father, Daughter"
              value={member.relation}
              onChange={(e) => updateMember(index, 'relation', e.target.value)}
            />
          </div>

          <div className="form-group row">
            <label>Name:</label>
            <input
              type="text"
              placeholder="Member Name"
              value={member.name}
              onChange={(e) => updateMember(index, 'name', e.target.value)}
            />
          </div>

          <div className="form-group row">
            <label>Mobile:</label>
            <input
              type="text"
              placeholder="Mobile Number"
              value={member.mobile}
              onChange={(e) => updateMember(index, 'mobile', e.target.value)}
            />
          </div>

          <div className="form-group row">
            <label>Date of Birth:</label>
            <input
              type="date"
              value={member.dob}
              onChange={(e) => updateMember(index, 'dob', e.target.value)}
            />
          </div>

          {isChild(member.relation) && (
            <>
              <div className="form-group row">
                <label>Is Student?</label>
                <div className="radio-inline-group">
                  <label>
                    <input
                      type="radio"
                      name={`student_${index}`}
                      value="student"
                      checked={member.isStudent === 'student'}
                      onChange={(e) =>
                        updateMember(index, 'isStudent', e.target.value)
                      }
                    />
                    Student
                  </label>
                  <label>
                    <input
                      type="radio"
                      name={`student_${index}`}
                      value="not-student"
                      checked={member.isStudent === 'not-student'}
                      onChange={(e) =>
                        updateMember(index, 'isStudent', e.target.value)
                      }
                    />
                    Not Student
                  </label>
                </div>
              </div>

              {member.isStudent === 'student' && (
                <div className="form-group row">
                  <label>School / College Name:</label>
                  <input
                    type="text"
                    placeholder="Enter School or College"
                    value={member.schoolOrCollege}
                    onChange={(e) =>
                      updateMember(index, 'schoolOrCollege', e.target.value)
                    }
                  />
                </div>
              )}

              {member.isStudent === 'not-student' && (
                <>
                  <div className="form-group row">
                    <label>What are they doing?</label>
                    <div className="radio-inline-group">
                      <label>
                        <input
                          type="radio"
                          name={`jobChild_${index}`}
                          value="under-3"
                          checked={member.jobOrChild === 'under-3'}
                          onChange={(e) =>
                            updateMember(index, 'jobOrChild', e.target.value)
                          }
                        />
                        Under 3 Years
                      </label>
                      <label>
                        <input
                          type="radio"
                          name={`jobChild_${index}`}
                          value="job"
                          checked={member.jobOrChild === 'job'}
                          onChange={(e) =>
                            updateMember(index, 'jobOrChild', e.target.value)
                          }
                        />
                        Job
                      </label>
                      <label>
                        <input
                          type="radio"
                          name={`jobChild_${index}`}
                          value="other"
                          checked={member.jobOrChild === 'other'}
                          onChange={(e) =>
                            updateMember(index, 'jobOrChild', e.target.value)
                          }
                        />
                        Other
                      </label>
                    </div>
                  </div>

                  {(member.jobOrChild === 'job' ||
                    member.jobOrChild === 'other') && (
                    <div className="form-group row">
                      <label>Job Detail:</label>
                      <input
                        type="text"
                        placeholder="Enter Job Detail"
                        value={member.jobDetail}
                        onChange={(e) =>
                          updateMember(index, 'jobDetail', e.target.value)
                        }
                      />
                    </div>
                  )}
                </>
              )}
            </>
          )}

          <button className="remove-btn" onClick={() => removeMember(index)}>
            Remove Member
          </button>
        </div>
      ))}

      <div className="submit-btn-container">
        <button className="submit-btn" onClick={handleSubmit}>
          Submit
        </button>
      </div>
    </div>
  );
}
