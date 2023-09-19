import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../../features/redux/reduxHooks';
import { fetchCompaniesThunk } from '../../../features/thunkActions/companyThunk';

export default function StartingQuizPage(): JSX.Element {
  const companies = useAppSelector((state) => state.questionsByCompany);
  console.log(companies);
  const dispatch = useAppDispatch();
  useEffect(() => {
    void dispatch(fetchCompaniesThunk());
  }, []);
  const navigate = useNavigate();

  return (
    <div className="container">
      <p className="text-4xl py-5 my-10 text-zinc-200 text-center">Выбрать компанию:</p>
      <div className="flex flex-row justify-around">
        {companies.map((item) => (
          <div key={item.id}>
            <div className="group" onClick={() => navigate(`/companies/${item.id}/questions`)}>
              {/* {item.name} */}
              {item.img ? (
                <>
                  <img src={item.img} alt="company" />
                  <p className="text-zinc-200 text-center">{item.name}</p>
                </>
              ) : (
                <p className="text-zinc-200 text-center">{item.name}</p>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
