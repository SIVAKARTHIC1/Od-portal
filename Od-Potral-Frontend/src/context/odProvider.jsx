import {
  createContext,
  useReducer,
  useContext,
  useEffect,
  useCallback,
} from "react";
import { getAllOd_Api, getOd_Api } from "../Services/apiOnDuty";

const dataArray = [
  {
    name: "John Doe",
    rollNo: "B12345",
    year: "2nd Year",
    mentorCode: "MNT001",
    type: "Leave",
    event: "N/A",
    fromDate: "2024-10-10",
    toDate: "2024-10-12",
    approvalStatus: "approved",
  },
  {
    name: "Jane Smith",
    rollNo: "C67890",
    year: "3rd Year",
    mentorCode: "MNT002",
    type: "OD",
    event: "Sports Meet",
    fromDate: "2024-10-14",
    toDate: "2024-10-16",
    approvalStatus: "pending",
  },
  {
    name: "Sam Wilson",
    rollNo: "A98765",
    year: "1st Year",
    mentorCode: "MNT003",
    type: "Leave",
    event: "N/A",
    fromDate: "2024-10-08",
    toDate: "2024-10-09",
    approvalStatus: "rejected",
  },
  {
    name: "Emily Johnson",
    rollNo: "D23456",
    year: "4th Year",
    mentorCode: "MNT004",
    type: "OD",
    event: "Tech Symposium",
    fromDate: "2024-10-20",
    toDate: "2024-10-21",
    approvalStatus: "approved",
  },
  {
    name: "Michael Brown",
    rollNo: "E34567",
    year: "3rd Year",
    mentorCode: "MNT005",
    type: "Leave",
    event: "N/A",
    fromDate: "2024-10-12",
    toDate: "2024-10-13",
    approvalStatus: "pending",
  },
  {
    name: "Sophia Martinez",
    rollNo: "F45678",
    year: "2nd Year",
    mentorCode: "MNT006",
    type: "OD",
    event: "Workshop",
    fromDate: "2024-10-18",
    toDate: "2024-10-19",
    approvalStatus: "approved",
  },
];

const currentOd = {
  name: "John Doe",
  rollNumber: "123456",
  mentorCode: "MNT2024",
  specialLabCode: "LAB123",
  eventName: "Annual Science Expo",
  fromTime: "10:00 AM",
  toTime: "12:00 PM",
  type: "External",
  fromDate: "2024-09-16",
  toDate: "2024-09-16",
  approvalStatus: "pending",
};

// Initial state for the reducer
const initialState = {
  data: dataArray,
  isLoading: false,
  error: "",
  currentOd,
};

// Define action types
const reducer = (state, action) => {
  switch (action.type) {
    case "GETALL/OD":
      return {
        ...state,
        data: action.payload,
        isLoading: false,
      };

    case "GET/OD":
      return {
        ...state,
        currentOd: action.payload,
        isLoading: false,
      };

    case "APPLY/OD":
      return {
        ...state,
        data: [...state.data, action.payload],
        isLoading: false,
      };

    case "APPROVE/OD":
      return {
        ...state,
        data: state.data?.map((od) =>
          od.rollNumber === action.payload
            ? { ...od, approvalStatus: "approved" }
            : od
        ),
      };

    case "REJECT/OD":
      return {
        ...state,
        data: state.data?.map((od) =>
          od.rollNumber === action.payload.id
            ? {
                ...od,
                approvalStatus: "rejected",
                rejectedReason: action.payload.rejectedReason,
              }
            : od
        ),
      };

    case "DELETE/OD":
      return {
        ...state,
        data: state.data?.filter((od) => od.rollNumber !== action.payload),
      };

    case "ERROR/OD":
      return {
        ...state,
        error: action.payload,
        isLoading: false,
      };

    case "LOADING/OD":
      return {
        ...state,
        isLoading: true,
      };

    default:
      return state;
  }
};

// Create the context
const OdContext = createContext(undefined);

export const useOdContext = () => {
  const context = useContext(OdContext);
  if (!context) {
    throw new Error("useAuthContext must be used within an AuthProvider");
  }
  return context;
};

// Context provider component
export function OdProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(function () {
    (async function () {
      try {
        const data = await getAllOd_Api();
        dispatch({ type: "GETALL/OD", payload: data });
      } catch (error) {
        dispatch({ type: "ERROR/OD", payload: error.message });
      }
    })();
  }, []);

  async function applyOd(data) {
    dispatch({ type: "LOADING/OD" });
    dispatch({ type: "APPLY/OD", payload: data });
  }

  const getOd = useCallback(async function getOd(id) {
    dispatch({ type: "LOADING/OD" });
    try {
      const data = await getOd_Api(id);
      console.log(data)
      dispatch({ type: "GET/OD", payload: data });
    } catch (error) {
      dispatch({ type: "ERROR/OD", payload: error.message });
    }
  }, []);

  const { data, isLoading, error, currentOd } = state;

  return (
    <OdContext.Provider
      value={{ data, isLoading, error, dispatch, currentOd, applyOd, getOd }}
    >
      {children}
    </OdContext.Provider>
  );
}

export { OdContext };
