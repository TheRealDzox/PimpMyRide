"use client"
import React from 'react';
import { Card, CardFooter, Button, Divider,  } from '@nextui-org/react';

import Fabian from '../images/team/Fabian.jpg';
import Christian from '../images/team/Christian.jpg';
import Dominik from '../images/team/Dominik.jpg';
import Noel from '../images/team/Noel.jpg';
import Simon from '../images/team/Simon.jpg';

import ModalFabian from '../components/Modals/ModalFabian';
import ModalSimon from '../components/Modals/ModalSimon';
import ModalNoel from '../components/Modals/ModalNoel';
import ModalChristian from '../components/Modals/ModalChristian';
import ModalDominik from '../components/Modals/ModalDominik';

export default function AboutContent() {


    return (
        <>
        <div>
            <h1 className="text-4xl font-bold text-center">Our Team</h1>
        </div>
        <section className="grid grid-cols-12 grid-rows items-center justify-center gap-4 py-8 md:py-10">
            <div className="col-span-8 col-start-3 lg:col-start-6 lg:col-span-2 text-center mt-4">
                <Card
                    isFooterBlurred
                    radius="lg"
                    className="border-none"
                    >
                        <img
                            width={256}
                            height={256}
                            src={Fabian.src}
                            alt="Fabian"
                        />
                    <CardFooter className="justify-between border-white/50 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-small bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 ">
                        <p className="text-medium text-white">Fabian</p>
                        <ModalFabian />
                    </CardFooter>
                </Card>
                <div className='col-span-6 font-semibold text-xl'>
                    <h2>Project Leader</h2>
                </div>
            </div>
        </section>
        <Divider />
        <section className="grid grid-cols-12 grid-rows items-center justify-center gap-4 py-8 md:py-10">
            <div className="col-span-8 col-start-3 lg:col-start-5 lg:col-span-2 text-center mt-4">
                <Card
                isFooterBlurred
                radius="lg"
                className="border-none"
                >
                    <img 
                        width={256}
                        height={256}
                        src={Christian.src} 
                        alt="Christian"
                    />
                    <CardFooter className="justify-between white-black/50 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-small bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 ">
                        <p className="text-medium text-white">Christian</p>
                        <ModalChristian />
                    </CardFooter>
                </Card>
                <div className='col-span-6 font-semibold text-xl'>
                    <h2>Producer</h2>
                </div>
            </div>
            <div className="col-span-8 col-start-3 lg:col-start-7 lg:col-span-2 text-center mt-4">
                <Card
                isFooterBlurred
                radius="lg"
                className="border-none"
                >
                    <img 
                        width={256}
                        height={256}
                        src={Dominik.src} 
                        alt="Dominik"
                    />
                    <CardFooter className="justify-between border-white/50 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-small bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 ">
                        <p className="text-medium text-white">Dominik</p>
                        <ModalDominik />
                    </CardFooter>
                </Card>
                <div className='col-span-6 font-semibold text-xl'>
                    <h2>System Technician</h2>
                </div>
            </div>
            <div className="col-span-8 col-start-3 lg:col-start-5 lg:col-span-2 text-center mt-4">
                <Card
                isFooterBlurred
                radius="lg"
                className="border-none"
                >
                    <img 
                        width={256}
                        height={256}
                        src={Noel.src} 
                        alt="Noel"
                    />
                    <CardFooter className="justify-between border-white/50 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-small bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 ">
                        <p className="text-medium text-white">Noel</p>
                        <ModalNoel />
                    </CardFooter>
                </Card>
                <div className='col-span-6 font-semibold text-xl'>
                    <h2>Programmer</h2>
                </div>
            </div>
            <div className="col-span-8 col-start-3 lg:col-start-7 lg:col-span-2 text-center mt-4">
                <Card
                isFooterBlurred
                radius="lg"
                className="border-none"
                >
                    <img 
                        width={256}
                        height={256}
                        src={Simon.src} 
                        alt="Simon"
                    />
                    <CardFooter className="justify-between border-white/50 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-small bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 ">
                        <p className="text-medium text-white">Simon</p>
                        <ModalSimon />
                    </CardFooter>
                </Card>
                <div className='col-span-6 font-semibold text-xl'>
                    <h2>Content Creator</h2>
                </div>
            </div>
        </section>
        <Divider />
        </>
    );
}