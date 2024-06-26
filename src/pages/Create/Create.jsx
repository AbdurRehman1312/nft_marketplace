import React, { useState, useCallback } from 'react'
import * as images from "../../assets";
const Create = () => {
    const [file, setFile] = useState(null);

    const onFileChange = (event) => {
        if (event.target.files && event.target.files.length > 0) {
            setFile(event.target.files[0]);
        }
    };

    const onDragOver = useCallback((event) => {
        event.preventDefault();  // Prevent default behavior (Prevent file from being opened)
    }, []);

    const onDrop = useCallback((event) => {
        event.preventDefault();
        const files = event.dataTransfer.files;
        if (files && files.length > 0) {
            setFile(files[0]);
        }
    }, []);

    return (
        <div className='md:container md:mx-auto px-3 py-8'>
            <div className='flex justify-center items-start md:flex-row flex-col gap-20'>
                <div className='bg-[#262626] xl:w-[25%] lg:w-[40%] md:w-[50%] w-full rounded-[30px] p-5 flex justify-between gap-3 flex-col'
                    onDragOver={onDragOver}
                    onDrop={onDrop}>
                    <div className='lg:h-[300px] md:h-[280px] h-[250px] flex justify-center items-center'>
                        <div className='flex flex-col items-center'>
                            <img src={images.upload} alt="" className='w-5 my-3' />
                            <p>Drag and drop media</p>
                            <div className='flex items-center gap-2'>
                                <span>Or</span>
                            <label htmlFor="file-upload" className='cursor-pointer text-blue-400 underline'>
                                browse files
                            </label>
                            </div>
                            <input id="file-upload" type="file" className="hidden" onChange={onFileChange} />
                            <p className='font-light text-gray-300'>Max size: 50mb</p>
                            <p className='font-light text-gray-300'>JPG, PNG, GIF, SVG, MP4</p>
                            {file && <p>File: {file.name}</p>}
                        </div>
                    </div>
                </div>
                <div className='xl:w-[25%] lg:w-[40%] md:w-[50%] w-full flex flex-col'>
                    <h2 className="text-white mb-3 font-semibold">Collection</h2>
                    <button className='bg-[#4a4a4a] hover:opacity-80 cursor-pointer font-semibold rounded-[15px] text-white p-4 flex items-center gap-3'>
                        <div className='h-[50px] w-[50px] bg-[#767676] rounded-[5px] flex justify-center items-center'>
                            +
                        </div>
                        <p className='font-semibold'>Create new collection</p>
                    </button>
                    <div className='mt-6'>
                        <h2 className="text-white mb-3 font-semibold">Name your NFT</h2>
                        <input type="text" placeholder='Name your NFT' className=' p-2.5 text-sm rounded-[10px] w-full bg-black appearance-none border-0 focus:outline-none' />
                    </div>
                    <div className='mt-6'>
                        <h2 className="text-white mb-3 font-semibold">Supply</h2>
                        <input type="number" placeholder='Supply' className=' p-2.5 text-sm rounded-[10px] w-full bg-black appearance-none border-0 focus:outline-none' />
                    </div>
                    <div className='mt-6'>
                        <h2 className="text-white mb-3 font-semibold">Description</h2>
                        <textarea placeholder='Enter a Description' className=' p-2.5 text-sm rounded-[10px] w-full bg-black appearance-none border-0 focus:outline-none' />
                    </div>
                    <div className='mt-6'>
                        <h2 className="text-white mb-3 font-semibold">External Link</h2>
                        <textarea type="url" placeholder='https://wiww.com' className=' p-2.5 text-sm rounded-[10px] w-full bg-black appearance-none border-0 focus:outline-none' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Create