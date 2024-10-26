import { useState,useEffect } from "react";
import axios from 'axios'

export interface Workflow{
    id:number;
    name:string;
    description:string;
}

const useFetchWorkflows = () => {
    const [workflows, setWorkflows] = useState<Workflow[]>([]);
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | null>(null);
  
    useEffect(() => {
      const fetchWorkflows = async () => {
        setLoading(true);
        try {
          const response = await axios.get('/api/workflows');
          setWorkflows(response.data);
        } catch (err) {
          setError('Failed to fetch workflows.');
        } finally {
          setLoading(false);
        }
      };
  
      fetchWorkflows();
    }, []);
    return {workflows,loading,error}
  
}
export default useFetchWorkflows;