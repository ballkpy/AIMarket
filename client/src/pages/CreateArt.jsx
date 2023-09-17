import React, { useEffect, useState } from 'react';
import { initFlowbite } from 'flowbite';
import SidebarArt from '../components/SidebarArt';
import TextareaAutosize from 'react-textarea-autosize';
import axios from 'axios';

const CreateArt = () => {
  const [showNegative, setShowNegative] = useState(false);
  const [prompt, setPrompt] = useState('');
  const [negaPrompt, setnegaPrompt] = useState('');
  // const [result, setResult] = useState('');
  const [genID, setgenID] = useState('');
  const [allResults, setAllResults] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    initFlowbite();
  }, []);

  const generateImage = async () => {
    if (prompt) {
      try {
        const options = {
          method: 'POST',
          url: 'https://cloud.leonardo.ai/api/rest/v1/generations',
          headers: {
            accept: 'application/json',
            'content-type': 'application/json',
            authorization: 'Bearer 216513cf-9771-439a-a48a-b299dd1b82e3',
          },
          data: {
            height: 1024,
            modelId: '6bef9f1b-29cb-40c7-b9df-32b51c1f67d3',
            prompt: prompt,
            width: 1024,
            num_images: 1,
            guidance_scale: 7,
            init_strength: 0.3,
            promptMagicVersion: 'v2',
            promptMagic: true,
            highContrast: false,
            presetStyle: 'LEONARDO',
          },
        };

        await axios
          .request(options)
          .then(function (response) {
            const resID = response.data.sdGenerationJob.generationId;
            console.log(resID);

            const options = {
              method: 'GET',
              url: 'https://cloud.leonardo.ai/api/rest/v1/generations/' + resID,
              headers: {
                accept: 'application/json',
                authorization: 'Bearer 216513cf-9771-439a-a48a-b299dd1b82e3',
              },
            };

            setTimeout(() => {
              axios
                .request(options)
                .then(function (response) {
                  console.log(response.data);
                  const resImg = response.data.generations_by_pk;
                  setAllResults(resImg);
                  //   const options = {
                  //     method: 'POST',
                  //     url: 'http://localhost:8080/api/createimg',
                  //     headers: {
                  //       accept: 'application/json',
                  //       'Content-Type': 'application/json',
                  //     },
                  //     data: {
                  //       prompt: response.data.generations_by_pk.prompt,
                  //       photo:
                  //         response.data.generations_by_pk.generated_images[0].url,
                  //       id: response.data.generations_by_pk.id,
                  //     },
                  //   };
                  //   console.log(
                  //     response.data.generations_by_pk.generated_images[0].url
                  //   );
                  //   setTimeout(() => {
                  //     axios
                  //       .request(options)
                  //       .then(function (response) {
                  //         console.log(response.data);
                  //       })
                  //       .catch(function (error) {
                  //         console.log(error);
                  //       });
                  //   }, 3000);
                })
                .catch(function (error) {
                  console.error(error);
                });
            }, 30000);
          })

          .catch(function (error) {
            console.error(error);
          });
      } catch (error) {
        alert(error);
      }
    }
  };
  return (
    <div>
      <SidebarArt />
      {/* content area */}
      <div className='bg-black w-full h-screen'>
        <div className='p-4 sm:ml-64 bg-black h-auto flex justify-between'>
          <div className='px-5 pt-2 w-screen'>
            <h1 className='text-md md:text-3xl font-bold text-white mt-2'>
              AI Image Generation
            </h1>
            <div className='mb-4 mt-4'>
              <TextareaAutosize
                //   id='message'
                maxlength='1000'
                onChange={(e) => setPrompt(e.target.value)}
                value={prompt}
                class='block px-6 py-3 w-full text-xl font-semibold text-gray-300 bg-gray-900 rounded-lg focus:ring-yellow-500 bordered-none'
                placeholder='Write your thoughts here...'
              ></TextareaAutosize>

              <TextareaAutosize
                //   id='message'
                maxlength='1000'
                onChange={(e) => setnegaPrompt(e.target.value)}
                value={negaPrompt}
                class={`block px-6 py-3 mt-4 w-full text-xl font-semibold text-gray-300 bg-gray-900 rounded-lg focus:ring-yellow-500 bordered-none ${
                  showNegative ? `block` : `hidden`
                }`}
                placeholder='Write your thoughts here...'
              ></TextareaAutosize>
              {/* <input type="text" id="default-input" onChange={(e) => setPrompt(e.target.value)} value={prompt} className="bg-gray-800 text-gray-900 text-sm rounded border-gray-800 focus:border-yellow-600 block w-full p-2.5" />
                        <input type="text" id="default-input" className={`bg-gray-800 text-gray-900 text-sm rounded border-gray-800 focus:border-yellow-600 block w-full p-2.5 mt-3 ${showNegative ? `block` : `hidden`}`} /> */}
            </div>

            <div className='flex justify-between items-center'>
              <div className='drop-left flex items-center'>
                <select
                  id='countries'
                  className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                >
                  <option selected>Choose a country</option>
                  <option value='US'>United States</option>
                  <option value='CA'>Canada</option>
                  <option value='FR'>France</option>
                  <option value='DE'>Germany</option>
                </select>
                <select
                  id='countries'
                  className='ml-3 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                >
                  <option selected>Choose a country</option>
                  <option value='US'>United States</option>
                  <option value='CA'>Canada</option>
                  <option value='FR'>France</option>
                  <option value='DE'>Germany</option>
                </select>

                <label className='relative inline-flex items-center ml-3 cursor-pointer'>
                  <input
                    type='checkbox'
                    value=''
                    class='sr-only peer'
                    onClick={() => setShowNegative(!showNegative)}
                  />
                  <div className="w-9 h-5 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                  <span className='ml-3 text-sm font-medium text-gray-300'>
                    addnegative
                  </span>
                </label>
              </div>
              <div className='drop-right'>
                <button
                  type='button'
                  onClick={generateImage}
                  className={`focus:outline-none text-white bg-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-md px-14 py-4 mr-2 mb-2 dark:focus:ring-yellow-900`}
                >
                  Genarate
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* list image */}
        <div className='sm:ml-64 bg-black h-auto border-t p-10'>
          <div className='flex justify-between items-center'>
            <h1 className='text-gray-300 font-medium w-[60%]'>
              <div
                role='status'
                class={`w-full animate-pulse ${loading ? '' : 'hidden'}`}
              >
                <div class='h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[760px] mb-2.5'></div>
                <div class='h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[660px] mb-2.5'></div>
                <div class='h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[700px] mb-2.5'></div>
              </div>
              {allResults ? allResults.prompt : ''}
            </h1>
            <div className='flex items-center'>
              <div>
                <h1 className='text-gray-300 font-medium text-sm'>dasd</h1>
              </div>
              <div className='pl-5'>
                <h1 className='text-gray-300 font-medium text-sm'>
                  {allResults ? allResults.imageWidth + 'x' : ''}
                  {allResults ? allResults.imageHeight + 'px' : ''}
                </h1>
              </div>
              <div className='pl-5'>
                <button
                  type='button'
                  class='focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900'
                >
                  Delete img
                </button>
              </div>
            </div>
          </div>

          <div className='mt-5'>
            <div className='grid grid-cols-4'>
              <div>
                <img
                  src={allResults ? allResults.generated_images[0].url : ''}
                  alt={allResults ? allResults.seed : ''}
                  className={`rounded w-[100%] h-[100%] ${
                    allResults ? '' : 'hidden'
                  }`}
                />
              </div>
            </div>
          </div>
        </div>
        {/* <h1>{genID}</h1> */}
      </div>
    </div>
  );
};

export default CreateArt;
