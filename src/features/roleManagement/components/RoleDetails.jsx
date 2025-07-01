import React, { useState, useEffect, useRef } from 'react';
import { Search, MoreVertical, Filter } from 'lucide-react';
import Pagination from '../../../components/atoms/Pagination';

const users = [
  {
    id: 1,
    name: 'Olivia Rhye',
    role: 'Administrator',
    department: 'Product Designer',
    email: 'olivia@untitledui.com',
    lastSeen: '22 Jan 2024',
    avatar: 'https://i.pravatar.cc/40?u=olivia',
  },
  {
    id: 2,
    name: 'Phoenix Baker',
    role: 'Administrator',
    department: 'Product Manager',
    email: 'phoenix@untitledui.com',
    lastSeen: '30 mins ago',
    avatar: 'https://i.pravatar.cc/40?u=phoenix',
  },
  {
    id: 3,
    name: 'Lana Steiner',
    role: 'Supervisor',
    department: 'Frontend Developer',
    email: 'lana@untitledui.com',
    lastSeen: 'Yesterday',
    avatar: 'https://i.pravatar.cc/40?u=lana',
  },
  {
    id: 4,
    name: 'Demi Wilkinson',
    role: 'Supervisor',
    department: 'Backend Developer',
    email: 'demi@untitledui.com',
    lastSeen: '2 days ago',
    avatar: 'https://i.pravatar.cc/40?u=demi',
  },
  {
    id: 5,
    name: 'Candice Wu',
    role: 'Editor',
    department: 'Fullstack Developer',
    email: 'candice@untitledui.com',
    lastSeen: '18 Jan 2024',
    avatar: 'https://i.pravatar.cc/40?u=candice',
  },
  {
    id: 6,
    name: 'Natali Craig',
    role: 'Supervisor',
    department: 'UX Designer',
    email: 'natali@untitledui.com',
    lastSeen: '28 Jan 2024',
    avatar: 'https://i.pravatar.cc/40?u=natali',
  },
  {
    id: 7,
    name: 'Jordan Bell',
    role: 'Supervisor',
    department: 'UX Copywriter',
    email: 'talia@untitledui.com',
    lastSeen: '5 hours ago',
    avatar: 'https://i.pravatar.cc/40?u=bell',
  },
];

const RoleDetails = () => {
  const [search, setSearch] = useState('');
  const [openMenuId, setOpenMenuId] = useState(null);
  const [isRoleDropdownOpen, setIsRoleDropdownOpen] = useState(false);
  const [selectedRole, setSelectedRole] = useState('Administrator');

  const roleDropdownRef = useRef(null);
  const userMenusRef = useRef({});

  const filteredUsers = users.filter((user) => {
    const searchLower = search.toLowerCase();
    return (
      user.name.toLowerCase().includes(searchLower) ||
      user.role.toLowerCase().includes(searchLower) ||
      user.department.toLowerCase().includes(searchLower)
    );
  });

  const roles = ['None', 'Administrator', 'Supervisor', 'Editor'];

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        roleDropdownRef.current &&
        !roleDropdownRef.current.contains(event.target)
      ) {
        setIsRoleDropdownOpen(false);
      }

      const clickedInsideUserMenu = Object.values(userMenusRef.current).some(
        (ref) => ref?.contains(event.target)
      );
      if (!clickedInsideUserMenu) {
        setOpenMenuId(null);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="min-h-screen p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-4 relative">
          <h2 className="text-xl font-semibold text-gray-900">
            All users <span className="bg-purple-100 text-purple-800 text-sm font-medium px-2.5 py-0.5 rounded-full">{users.length}</span>
          </h2>

          <div className="relative" ref={roleDropdownRef}>
            <button
              className="px-4 py-2 text-sm font-medium text-white bg-primary rounded-md hover:bg-gray-700"
              onClick={() => setIsRoleDropdownOpen(!isRoleDropdownOpen)}
            >
              Role Permission
            </button>

            {isRoleDropdownOpen && (
              <div className="absolute right-0 mt-2 w-64 bg-white border border-gray-200 rounded-md shadow-lg z-10">
                <div className="p-4">
                  <h3 className="text-sm font-semibold text-gray-900">Assign Role</h3>
                  <p className="text-xs text-gray-500 mb-3">Select a role to assign</p>
                  <div className="space-y-2">
                    {roles.map((role) => (
                      <label
                        key={role}
                        className="flex items-center justify-between cursor-pointer hover:bg-gray-50 px-2 py-1 rounded"
                      >
                        <span className="text-sm text-gray-700">{role}</span>
                        <input
                          type="radio"
                          name="role"
                          value={role}
                          checked={selectedRole === role}
                          onChange={() => setSelectedRole(role)}
                          className="form-radio text-blue-600 focus:ring-0"
                        />
                      </label>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Search and Filter */}
        <div className="flex items-center justify-between mb-6">
          <div className="relative w-full max-w-xs">
            <Search className="absolute left-3 top-2.5 w-4 h-4 text-gray-400" />
            <input
              type="text"
              placeholder="Search"
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-300 text-sm"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
          <button className="flex items-center gap-2 px-4 py-2 text-sm text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50">
            <Filter className="w-4 h-4" />
            Filters
          </button>
        </div>

        {/* Table */}
        <div className="overflow-x-auto border rounded-lg">
          <table className="min-w-full divide-y divide-gray-200 text-sm">
            <thead className="bg-gray-50 text-gray-500 uppercase tracking-wide text-xs">
              <tr>
                <th className="px-6 py-3 text-left">Name</th>
                <th className="px-6 py-3 text-left">Role</th>
                <th className="px-6 py-3 text-left">Department</th>
                <th className="px-6 py-3 text-left">Email address</th>
                <th className="px-6 py-3 text-left">Last seen online</th>
                <th className="px-6 py-3"></th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100 text-gray-700 bg-white ">
              {filteredUsers.map((user) => (
                <tr key={user.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap flex items-center gap-3">
                    <img
                      src={user.avatar}
                      alt={user.name}
                      className="w-8 h-8 rounded-full object-cover"
                    />
                    <span className="font-medium">{user.name}</span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">{user.role}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{user.department}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{user.email}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{user.lastSeen}</td>
                  <td className="px-6 py-4 text-right relative">
                    <div ref={(el) => (userMenusRef.current[user.id] = el)}>
                      <button
                        className="text-gray-400 hover:text-gray-600"
                        onClick={() =>
                          setOpenMenuId(openMenuId === user.id ? null : user.id)
                        }
                      >
                        <MoreVertical className="w-4 h-4" />
                      </button>
                      {openMenuId === user.id && (
                        <div className="absolute right-0 mt-2 w-48 bg-white border border-blue-400 rounded-md shadow-lg z-10">
                          <ul className="py-1 text-sm text-gray-700">
                            <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                              Assign role
                            </li>
                            <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer border-t border-gray-200">
                              Unassign role
                            </li>
                          </ul>
                        </div>
                      )}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <Pagination />

        <div className="mt-6 p-4 text-xs text-gray-500 border-t">
          Assigning a role<br />
          The role of editor has been assigned to user <strong>Candice Wu</strong>.
        </div>
      </div>
    </div>
  );
};

export default RoleDetails;




