'use client' // Error components must be Client Components
import { useEffect } from 'react'
import Link from 'next/link';
import Layout from "@/layouts/Layout";

export default function Error({ error, reset }) {
    useEffect(() => {
      // Log the error to an error reporting service
      console.error(error)
    }, [error])
   
    return (
        <Layout>
        <div className="section started" style={{ height: "96vh" }}>
          <div className="centrize full-width">
            <div className="vertical-center">
              <div className="started-content">
                <div className="h-title glitch-effect" data-text="Erreur">
                  <span>Erreur</span>
                </div>          
                <button
                onClick={
                  // Attempt to recover by trying to re-render the segment
                  () => reset()
                }
              >
                Try again
              </button>
              </div>
            </div>
          </div>
        </div>
        </Layout>
        );
      };